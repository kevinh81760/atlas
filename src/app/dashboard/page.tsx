'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import MainArea from '@/components/dashboard/MainArea';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // TODO: Check authentication status
  }, [router]);

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <MainArea />
    </div>
  );
}
