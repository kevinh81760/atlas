import { useState } from 'react';
import { AuthTab } from './types';

export function useAuthTabs(initialTab: AuthTab = 'signin') {
  const [activeTab, setActiveTab] = useState<AuthTab>(initialTab);

  return {
    activeTab,
    setActiveTab,
  };
}
