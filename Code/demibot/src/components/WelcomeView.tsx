import { GraduationCap } from 'lucide-react'; // UPDATED ICON
import MessageInput from './MessageInput';

interface WelcomeViewProps {
  isSending: boolean;
  onSendMessage: (message: string) => void;
  suggestions: string[];
}

const WelcomeView = ({ isSending, onSendMessage, suggestions }: WelcomeViewProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-surface rounded-2xl mb-4 shadow-lg">
          <GraduationCap className="w-9 h-9 text-[--color-accent]" />
        </div>
        <h1 className="text-4xl font-bold text-text-primary">DemiBot</h1>
        <p className="text-lg text-text-secondary mt-2">Your AcademIQ Assistant</p>
      </div>

      <div className="w-full flex-shrink-0">
         <MessageInput onSendMessage={onSendMessage} isSending={isSending} suggestions={suggestions} />
      </div>
    </div>
  );
};

export default WelcomeView;