'use client';

import { AuthTab } from '@/lib/auth/types';

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
            ? 'bg-[#F4F4F5]'
            : 'bg-white'
        }`}
      >
        <span className={`font-inter text-[16px] ${
          activeTab === 'signin'
            ? 'font-medium text-black'
            : 'font-normal text-[#71717A]'
        }`}>
          Sign In
        </span>
      </button>
      <button
        onClick={() => onTabChange('signup')}
        className={`flex h-[48px] flex-1 items-center justify-center rounded-[8px] ${
          activeTab === 'signup'
            ? 'bg-[#F4F4F5]'
            : 'bg-white'
        }`}
      >
        <span className={`font-inter text-[16px] ${
          activeTab === 'signup'
            ? 'font-medium text-black'
            : 'font-normal text-[#71717A]'
        }`}>
          Sign Up
        </span>
      </button>
    </div>
  );
}
