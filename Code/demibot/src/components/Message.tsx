import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Clipboard, Check, FileCode, ClipboardType } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface MessageProps {
  text: string;
  sender: 'user' | 'bot';
}

// A simplified CopyButton that only shows its tooltip on success.
const CopyButton: React.FC<{
  onClick: () => void;
  isSuccess: boolean;
  successTooltipText: string; // New prop for specific success message
  Icon: React.ElementType;
}> = ({ onClick, isSuccess, successTooltipText, Icon }) => (
  // The 'group' class is no longer needed here as the tooltip is
  // now controlled by the 'isSuccess' state, not hover.
  <div className="relative flex items-center">
    <button
      onClick={onClick}
      className={`copy-button ${isSuccess ? 'copy-button-success' : ''}`}
    >
      {isSuccess ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
    </button>
    {/* (CORRECTION) The tooltip is now conditionally rendered ONLY on success */}
    {isSuccess && (
      <div className="copy-tooltip-success">
        {successTooltipText}
      </div>
    )}
  </div>
);

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';
  const contentRef = useRef<HTMLDivElement>(null);
  const [copyState, setCopyState] = useState<'idle' | 'rawSuccess' | 'mdSuccess' | 'richSuccess'>('idle');

  // Reset copy state after a 2-second delay
  useEffect(() => {
    if (copyState !== 'idle') {
      const timer = setTimeout(() => setCopyState('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyState]);

  // Combined handler for all copy types
  const handleCopy = async (type: 'raw' | 'md' | 'rich') => {
    try {
      switch (type) {
        case 'raw':
          if (contentRef.current?.innerText) {
            await navigator.clipboard.writeText(contentRef.current.innerText);
            setCopyState('rawSuccess');
          }
          break;
        case 'md':
          await navigator.clipboard.writeText(text);
          setCopyState('mdSuccess');
          break;
        case 'rich':
          if (contentRef.current) {
            const htmlContent = contentRef.current.innerHTML;
            const textContent = contentRef.current.innerText;
            const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
            const textBlob = new Blob([textContent], { type: 'text/plain' });
            const clipboardItem = new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob });
            await navigator.clipboard.write([clipboardItem]);
            setCopyState('richSuccess');
          }
          break;
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* (CORRECTION) Added 'pb-4' to this container to ensure there's enough space for the buttons below */}
      <div className="max-w-[85%] md:max-w-[70%] flex items-start gap-4 my-6 pb-4">
        {!isUser && (
          <>
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-surface">
              <Bot className="w-5 h-5 text-[--color-accent]" />
            </div>
            {/* This 'group' still controls the visibility of the button container on hover */}
            <div className="group relative w-full">
              <div ref={contentRef} className="flex-grow pt-1 markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
                  }}
                >
                  {text}
                </ReactMarkdown>
              </div>
              {/* This container fades in when hovering the message content */}
              <div className="absolute left-0 top-full pt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CopyButton
                  onClick={() => handleCopy('raw')}
                  isSuccess={copyState === 'rawSuccess'}
                  successTooltipText="Copied as Text!"
                  Icon={Clipboard}
                />
                <CopyButton
                  onClick={() => handleCopy('md')}
                  isSuccess={copyState === 'mdSuccess'}
                  successTooltipText="Copied as Markdown!"
                  Icon={FileCode}
                />
                <CopyButton
                  onClick={() => handleCopy('rich')}
                  isSuccess={copyState === 'richSuccess'}
                  successTooltipText="Copied with Formatting!"
                  Icon={ClipboardType}
                />
              </div>
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