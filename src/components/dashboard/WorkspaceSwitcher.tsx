'use client';

import {
  ChevronDown,
  Briefcase,
  Check,
  Plus,
} from 'lucide-react';

interface Workspace {
  id: string;
  name: string;
  isActive: boolean;
}

interface WorkspaceSwitcherProps {
  isOpen: boolean;
  onToggle: () => void;
}

const workspaces: Workspace[] = [
  { id: '1', name: 'My Workspace', isActive: true },
  { id: '2', name: 'Work Workspace', isActive: false },
  { id: '3', name: 'Projects', isActive: false },
];

export default function WorkspaceSwitcher({ isOpen, onToggle }: WorkspaceSwitcherProps) {
  const active = workspaces.find((w) => w.isActive);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center h-10 px-3 py-2">
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full h-8 px-2.5 py-1.5 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7]"
        >
          <span className="font-outfit text-sm font-semibold text-black">
            {active?.name}
          </span>
          <ChevronDown size={16} className="text-[#71717A]" />
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col p-2 rounded-lg bg-white border border-[#E4E4E7]">
          <div className="flex flex-col gap-0.5">
            {workspaces.map((ws) => (
              <button
                key={ws.id}
                className={`flex items-center justify-between gap-2 h-9 px-3 py-2 rounded-md w-full text-left ${
                  ws.isActive ? 'bg-[#F4F4F5] text-black font-medium' : 'text-[#71717A]'
                } hover:bg-[#F4F4F5]`}
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span className="font-inter text-sm">{ws.name}</span>
                </div>
                {ws.isActive && <Check size={16} className="text-black" />}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-[#E4E4E7] my-1" />

          <button className="flex items-center gap-2 h-9 px-3 py-2 rounded-md text-[#71717A] hover:bg-[#F4F4F5] w-full">
            <Plus size={16} />
            <span className="font-inter text-sm font-medium">Add Workspace</span>
          </button>
        </div>
      )}
    </div>
  );
}
