'use client';

import { GoogleAuthButton } from './GoogleAuthButton';
import { Divider } from '@/components/ui/Divider';
import { AuthTabs } from './AuthTabs';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { useAuthTabs } from '@/lib/auth/useAuthTabs';
import { AuthFormData, SignUpFormData } from '@/lib/auth/types';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from "next/navigation";
import { upsertProfile } from '@/lib/supabase/upsertProfile';

export function AuthContainer() {
  const { activeTab, setActiveTab } = useAuthTabs('signin');
  const router = useRouter();

  const handleFormSubmit = async (data: AuthFormData | SignUpFormData) => {
    if (activeTab === "signin") {
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (signInError) {
        console.error(signInError.message);
        return;
      }

      console.log("signin success");
      console.log(signInData);


      if (signInData.session) {
        router.push("/dashboard");
      }
    } else if (activeTab === "signup") {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        // Optional: store full name in auth metadata too
        options: {
          data: {
            full_name: "fullName" in data ? data.fullName : undefined,
          },
        },
      });
    
      if (signUpError) {
        console.error(signUpError.message);
        return;
      }
    
      const user = signUpData.user;
      const session = signUpData.session;
    
      // If you require email confirmation, session may be null here
      if (!user) {
        console.error("No user returned from signup.");
        return;
      }
    
      // Only write to profiles if the user is actually authenticated (session exists)
      if (session) {
        try {
          await upsertProfile(supabase, {
            id: user.id,
            full_name: "fullName" in data ? data.fullName : undefined,
            avatar_url: null,
          });
    
          router.push("/dashboard");
        } catch (e) {
          console.error("Profile upsert failed:", e);
          // Optional: show toast + still route, or stop
        }
      } else {
        // Typical flow when email confirmation is ON
        router.push("/");
      }
    }
  };

  const handleGoogleAuth = async () => {
    try {
      console.log('Google auth clicked');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) throw error;
  
      // Usually Supabase redirects automatically, but in some environments you can do:
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      console.error("Google auth failed:", e);
    }
  };




  
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-[#FAFAFA]">
      <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-[600px] flex-col gap-[24px] overflow-y-auto rounded-[12px] border border-[#E4E4E7] bg-white px-[32px] py-[40px]">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-[8px]">
          <h1 className="font-outfit text-[32px] font-bold leading-none text-black">
            Welcome!
          </h1>
          <p className="font-inter text-[14px] font-normal text-[#71717A]">
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
