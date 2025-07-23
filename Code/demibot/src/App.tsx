import { useState } from 'react';
import ChatView from './components/ChatView';
import WelcomeView from './components/WelcomeView';
import { type MessageProps } from './components/Message';
import ChatHeader from './components/ChatHeader';

const SUGGESTIONS = [
  "What is the advising process?",
  "Tell me about the CSE curriculum.",
  "What are the library hours?",
  "How do I pay my tuition fees?",
];

const API_URL = "http://127.0.0.1:8000/chat"; // Backend URL for chat endpoint

function App() {
  const [hasChatStarted, setHasChatStarted] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = async (userMessage: string) => {
    if (isSending) return;

    setIsSending(true);

    // 1. Add user message and start chat if not started
    const newMessages: MessageProps[] = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);

    if (!hasChatStarted) {
      setHasChatStarted(true);
    }
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }
      
      // 2. Add an empty bot message placeholder to the state
      setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      // 3. Read and process the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break; // Stream finished
        }
        
        const chunk = decoder.decode(value, { stream: true });
        
        // 4. Append the received chunk to the last message (the bot's response)
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          const updatedLastMessage = { ...lastMessage, text: lastMessage.text + chunk };
          return [...prev.slice(0, -1), updatedLastMessage];
        });
      }

    } catch (error) {
      console.error("Failed to fetch chat response:", error);
      const errorResponse = "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
      
      // Update the last bot message with the error, or add a new one if fetch failed immediately
      setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage?.sender === 'user' || !lastMessage) {
              return [...prev, { sender: 'bot', text: errorResponse }];
          }
          const updatedLastMessage = { ...lastMessage, text: errorResponse };
          return [...prev.slice(0, -1), updatedLastMessage];
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-transparent">
      {hasChatStarted ? (
        <>
          <ChatHeader />
          <ChatView 
            messages={messages} 
            isSending={isSending} 
            onSendMessage={handleSendMessage} 
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <WelcomeView 
            isSending={isSending} 
            onSendMessage={handleSendMessage}
            suggestions={SUGGESTIONS}
          />
        </div>
      )}
    </div>
  );
}

export default App;