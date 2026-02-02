'use client';

import {
  Pin,
  Share2,
  EllipsisVertical,
} from 'lucide-react';

interface NoteHeaderProps {
  title: string;
  onTitleChange?: (title: string) => void;
}

export default function NoteHeader({ title, onTitleChange }: NoteHeaderProps) {
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-white border-b border-[#E4E4E7]">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange?.(e.target.value)}
        className="font-outfit text-2xl font-extrabold text-black bg-transparent outline-none"
        placeholder="Untitled"
      />

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 h-8 px-3 py-1.5 rounded-md bg-white border border-[#E4E4E7] hover:bg-[#F4F4F5]">
          <Pin size={14} className="text-[#71717A]" />
          <span className="font-outfit text-[13px] font-medium text-[#71717A]">Pin</span>
        </button>

        <button className="flex items-center gap-2 h-9 px-4 py-2 rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7]">
          <Share2 size={16} className="text-[#71717A]" />
          <span className="font-outfit text-sm font-medium text-black">Share</span>
        </button>

        <button className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7]">
          <EllipsisVertical size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
}
