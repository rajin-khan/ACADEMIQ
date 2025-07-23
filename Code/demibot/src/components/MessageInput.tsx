import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowUp } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isSending: boolean;
  suggestions?: string[];
}

const SuggestionChip: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-surface border border-border-subtle rounded-full text-sm text-text-secondary whitespace-nowrap transition-all hover:bg-surface-muted hover:border-border"
  >
    {text}
  </button>
);

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isSending, suggestions = [] }) => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isSending]);
  
  const sendMessage = (message: string) => {
    if (message.trim() && !isSending) {
      onSendMessage(message.trim());
      setInput('');
      setShowSuggestions(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4 flex flex-col items-center">
      {showSuggestions && suggestions.length > 0 && (
        <div className="flex items-center gap-2 mb-4 animate-fade-in">
          <p className="text-sm text-text-secondary">Try asking:</p>
          <ArrowUp className="w-4 h-4 text-text-secondary" />
        </div>
      )}
      {showSuggestions && suggestions.length > 0 && (
         <div className="flex flex-wrap justify-center gap-2 mb-4 animate-fade-in">
          {suggestions.map((text) => (
            <SuggestionChip key={text} text={text} onClick={() => handleSuggestionClick(text)} />
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full p-2 bg-surface rounded-2xl border border-border-subtle shadow-lg focus-within:border-[--color-accent-focus] focus-within:ring-2 focus-within:ring-[--color-accent-focus]/50 transition-all">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about North South University!"
            className="w-full bg-transparent p-2 pr-12 focus:outline-none text-text-primary placeholder:text-text-muted text-base"
            disabled={isSending}
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[--color-accent] rounded-lg text-white transition-all duration-300 ease-in-out hover:bg-[--color-accent-hover] disabled:bg-surface-muted disabled:text-text-muted disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;