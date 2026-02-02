'use client';

import { useState } from 'react';
import WorkspaceSwitcher from './WorkspaceSwitcher';
import FileExplorer from './FileExplorer';
import {
  House,
  FileText,
  FilePlus,
} from 'lucide-react';

interface SidebarProps {
  activeNoteId?: string;
  onNoteSelect?: (noteId: string) => void;
}

export default function Sidebar({ activeNoteId, onNoteSelect }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className="flex flex-col gap-2 w-[280px] h-full bg-[#F4F4F5] p-4 border-r border-[#E4E4E7]">
      <WorkspaceSwitcher
        isOpen={isDropdownOpen}
        onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
      />

      <div className="w-full h-px bg-[#E4E4E7]" />

      <div className="flex flex-col gap-1">
        <button className="flex items-center gap-3 h-9 px-3 rounded-lg bg-black text-white w-full">
          <House size={18} />
          <span className="font-outfit text-sm font-medium">Home</span>
        </button>
      </div>

      <div className="w-full h-px bg-[#E4E4E7]" />

      <div className="flex items-center justify-between h-8 px-3 py-1">
        <span className="font-outfit text-[11px] font-bold text-[#71717A] tracking-wide">
          NOTES
        </span>
        <button className="text-[#71717A] hover:text-black">
          <FilePlus size={16} />
        </button>
      </div>

      <FileExplorer activeNoteId={activeNoteId} onNoteSelect={onNoteSelect} />
    </aside>
  );
}
