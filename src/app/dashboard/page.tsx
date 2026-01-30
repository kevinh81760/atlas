'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotesPage() {
  const router = useRouter();
  
  useEffect(() => {
    // TODO: Check authentication status
    // When backend is ready, implement proper auth check:
    // const isAuthenticated = checkAuth();
    // if (!isAuthenticated) {
    //   router.push('/');
    // }
  }, [router]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-[24px]">
        <h1 className="font-outfit text-[48px] font-bold leading-none text-[var(--text-primary)]">
          Notes
        </h1>
        <p className="font-inter text-[16px] font-normal text-[var(--text-secondary)]">
          Your notes page content will go here
        </p>
      </div>
    </div>
  );
}
