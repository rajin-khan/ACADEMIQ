import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import { type MessageProps } from './Message';

interface ChatViewProps {
  messages: MessageProps[];
  isSending: boolean;
  onSendMessage: (message: string) => void;
}

const ChatView = ({ messages, isSending, onSendMessage }: ChatViewProps) => {
  return (
    <div className="font-mono w-full h-full flex flex-col bg-transparent animate-fade-in">
      <div className="flex-1 flex flex-col min-h-0 pt-24">
        <ChatMessages messages={messages} />
        <div className="flex-shrink-0 w-full">
          <MessageInput onSendMessage={onSendMessage} isSending={isSending} />
        </div>
      </div>
    </div>
  );
};

export default ChatView;