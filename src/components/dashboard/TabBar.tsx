'use client';

import { X } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string;
  onTabSelect?: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

export default function TabBar({ tabs, activeTabId, onTabSelect, onTabClose }: TabBarProps) {
  return (
    <div className="flex items-center h-10 px-4 bg-white border-b border-[#E4E4E7]">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            onClick={() => onTabSelect?.(tab.id)}
            className={`flex items-center gap-2 h-10 px-4 ${
              isActive
                ? 'border-b-2 border-[#FF8400]'
                : ''
            }`}
          >
            <span
              className={`font-inter text-[13px] ${
                isActive ? 'font-medium text-black' : 'text-[#71717A]'
              }`}
            >
              {tab.label}
            </span>
            <X
              size={14}
              className="text-[#71717A] hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose?.(tab.id);
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
