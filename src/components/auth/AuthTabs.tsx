'use client';

import { AuthTab } from './types';
import { Button } from '@/components/ui/Button';

interface AuthTabsProps {
  activeTab: AuthTab;
  onTabChange: (tab: AuthTab) => void;
}

export function AuthTabs({ activeTab, onTabChange }: AuthTabsProps) {
  return (
    <div className="flex w-full gap-[16px]">
      <button
        onClick={() => onTabChange('signin')}
        className={`flex h-[48px] flex-1 items-center justify-center rounded-[8px] ${
          activeTab === 'signin'
            ? 'bg-[var(--bg-tertiary)]'
            : 'bg-[var(--bg-secondary)]'
        }`}
      >
        <span className={`font-inter text-[16px] ${
          activeTab === 'signin'
            ? 'font-medium text-[var(--text-primary)]'
            : 'font-normal text-[var(--text-muted)]'
        }`}>
          Sign In
        </span>
      </button>
      <button
        onClick={() => onTabChange('signup')}
        className={`flex h-[48px] flex-1 items-center justify-center rounded-[8px] ${
          activeTab === 'signup'
            ? 'bg-[var(--bg-tertiary)]'
            : 'bg-[var(--bg-secondary)]'
        }`}
      >
        <span className={`font-inter text-[16px] ${
          activeTab === 'signup'
            ? 'font-medium text-[var(--text-primary)]'
            : 'font-normal text-[var(--text-muted)]'
        }`}>
          Sign Up
        </span>
      </button>
    </div>
  );
}
