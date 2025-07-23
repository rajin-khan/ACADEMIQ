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

function App() {
  const [hasChatStarted, setHasChatStarted] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = async (userMessage: string) => {
    setIsSending(true);

    const newMessages: MessageProps[] = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);

    if (!hasChatStarted) {
      setHasChatStarted(true);
    }
    
    setTimeout(() => {
      const botResponse = `This is a simulated response to: "${userMessage}". The real Groq API integration will go here.`;
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsSending(false);
    }, 1000);
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