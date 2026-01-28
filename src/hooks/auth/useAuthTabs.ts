import { useState } from 'react';
import { AuthTab } from '@/types/auth';

export function useAuthTabs(initialTab: AuthTab = 'signin') {
  const [activeTab, setActiveTab] = useState<AuthTab>(initialTab);

  return {
    activeTab,
    setActiveTab,
  };
}
