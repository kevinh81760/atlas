'use client';

interface NoteContentProps {
  content?: string;
  onContentChange?: (content: string) => void;
}

export default function NoteContent({ content, onContentChange }: NoteContentProps) {
  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto">
      <textarea
        value={content}
        onChange={(e) => onContentChange?.(e.target.value)}
        placeholder="Start writing..."
        className="w-full h-full font-inter text-base text-black bg-transparent outline-none resize-none placeholder:text-[#A1A1AA]"
      />
    </div>
  );
}
