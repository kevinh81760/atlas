'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  FileText,
} from 'lucide-react';

interface NoteItem {
  id: string;
  name: string;
  children?: NoteItem[];
}

interface FileExplorerProps {
  activeNoteId?: string;
  onNoteSelect?: (noteId: string) => void;
}

const notes: NoteItem[] = [
  {
    id: 'meeting-notes',
    name: 'Meeting Notes',
    children: [
      { id: 'q4-planning', name: 'Q4 Planning' },
      { id: 'action-items', name: 'Action Items' },
    ],
  },
  {
    id: 'project-ideas',
    name: 'Project Ideas',
  },
  { id: 'personal-journal', name: 'Personal Journal' },
  { id: 'work-tasks', name: 'Work Tasks' },
  { id: 'team-documents', name: 'Team Documents' },
];

function NoteTreeItem({
  note,
  depth = 0,
  activeNoteId,
  onNoteSelect,
}: {
  note: NoteItem;
  depth?: number;
  activeNoteId?: string;
  onNoteSelect?: (noteId: string) => void;
}) {
  const [expanded, setExpanded] = useState(note.id === 'meeting-notes');
  const hasChildren = note.children && note.children.length > 0;

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          if (hasChildren) setExpanded(!expanded);
          onNoteSelect?.(note.id);
        }}
        className={`flex items-center gap-1 h-8 px-3 py-1 rounded-md w-full hover:bg-[#E4E4E7] ${
          activeNoteId === note.id ? 'bg-[#E4E4E7]' : ''
        }`}
        style={{ paddingLeft: `${12 + depth * 24}px` }}
      >
        {hasChildren ? (
          expanded ? (
            <ChevronDown size={14} className="text-[#71717A] shrink-0" />
          ) : (
            <ChevronRight size={14} className="text-[#71717A] shrink-0" />
          )
        ) : null}
        <FileText size={16} className="text-[#71717A] shrink-0" />
        <span className="font-inter text-sm text-black truncate">{note.name}</span>
      </button>

      {hasChildren && expanded && (
        <div className="flex flex-col gap-0.5">
          {note.children!.map((child) => (
            <NoteTreeItem
              key={child.id}
              note={child}
              depth={depth + 1}
              activeNoteId={activeNoteId}
              onNoteSelect={onNoteSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileExplorer({ activeNoteId, onNoteSelect }: FileExplorerProps) {
  return (
    <div className="flex flex-col gap-0.5 flex-1 overflow-y-auto">
      {notes.map((note) => (
        <NoteTreeItem
          key={note.id}
          note={note}
          activeNoteId={activeNoteId}
          onNoteSelect={onNoteSelect}
        />
      ))}
    </div>
  );
}
