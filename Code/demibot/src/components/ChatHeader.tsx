import { GraduationCap } from 'lucide-react'; // UPDATED ICON

const ChatHeader = () => {
  return (
    <div className="absolute top-0 left-0 p-4 md:p-6 z-10 flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center bg-surface rounded-lg">
        <GraduationCap className="w-6 h-6 text-[--color-accent]" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-text-primary">DemiBot</h1>
        <p className="text-xs text-text-secondary">AcademIQ © 2025</p>
      </div>
    </div>
  );
};

export default ChatHeader;