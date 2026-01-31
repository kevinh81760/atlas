'use client';

import { GoogleAuthButton } from './GoogleAuthButton';
import { Divider } from '@/components/ui/Divider';
import { AuthTabs } from './AuthTabs';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { useAuthTabs } from '@/hooks/auth/useAuthTabs';
import { AuthFormData, SignUpFormData } from './types';

export function AuthContainer() {
  const { activeTab, setActiveTab } = useAuthTabs('signin');

  const handleFormSubmit = (data: AuthFormData | SignUpFormData) => {
    console.log('Form submitted:', data);
    // TODO: Add API call when backend is ready
  };

  const handleGoogleAuth = () => {
    console.log('Google auth clicked');
    // TODO: Add OAuth flow when backend is ready
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[750px] flex-col gap-[32px] rounded-[12px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-[80px] py-[60px]">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-[12px]">
          <h1 className="font-outfit text-[48px] font-bold leading-none text-[var(--text-primary)]">
            Welcome!
          </h1>
          <p className="font-inter text-[16px] font-normal text-[var(--text-secondary)]">
            Sign in or create an account to get started
          </p>
        </div>

        {/* Google Button */}
        <GoogleAuthButton onClick={handleGoogleAuth} />

        {/* Divider */}
        <Divider />

        {/* Tabs */}
        <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Form */}
        {activeTab === 'signin' && <SignInForm onSubmit={handleFormSubmit} />}
        {activeTab === 'signup' && <SignUpForm onSubmit={handleFormSubmit} />}
      </div>
    </div>
  );
}
