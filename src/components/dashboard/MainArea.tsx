'use client';

import { useState } from 'react';
import NoteHeader from './NoteHeader';
import TabBar from './TabBar';
import NoteContent from './NoteContent';

const defaultTabs = [
  { id: 'meeting-notes', label: 'Meeting Notes' },
  { id: 'project-ideas', label: 'Project Ideas' },
];

export default function MainArea() {
  const [title, setTitle] = useState('Untitled');
  const [activeTabId, setActiveTabId] = useState('meeting-notes');
  const [tabs, setTabs] = useState(defaultTabs);
  const [content, setContent] = useState('');

  const handleTabClose = (tabId: string) => {
    setTabs((prev) => prev.filter((t) => t.id !== tabId));
    if (activeTabId === tabId && tabs.length > 1) {
      const remaining = tabs.filter((t) => t.id !== tabId);
      setActiveTabId(remaining[0].id);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-white">
      <NoteHeader title={title} onTitleChange={setTitle} />
      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelect={setActiveTabId}
        onTabClose={handleTabClose}
      />
      <NoteContent content={content} onContentChange={setContent} />
    </div>
  );
}
