import React from 'react';
import { Bot, User } from 'lucide-react';

export interface MessageProps {
  text: string;
  sender: 'user' | 'bot';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';

  return (
    
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      
      <div className="max-w-[85%] md:max-w-[70%] flex items-start gap-4 my-6">

        {!isUser && (
          <>
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-surface">
              <Bot className="w-5 h-5 text-[--color-accent]" />
            </div>
            <div className="flex-grow pt-1">
              <p className="text-base leading-relaxed text-text-primary whitespace-pre-wrap">{text}</p>
            </div>
          </>
        )}
        
        {isUser && (
          <>
            <div className="flex-grow pt-1">
              <p className="text-base leading-relaxed text-text-primary whitespace-pre-wrap">{text}</p>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[--color-accent]">
              <User className="w-5 h-5 text-white" />
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Message;