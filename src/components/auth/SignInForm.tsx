'use client';

import { Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import { useAuthForm } from '@/hooks/auth/useAuthForm';
import { AuthFormData } from './types';

interface SignInFormProps {
  onSubmit?: (data: AuthFormData) => void;
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  const { values, errors, handleChange, handleSubmit } = useAuthForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[24px]">
      {/* Email Field */}
      <div className="flex w-full flex-col gap-[8px]">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          icon={<Mail className="h-[20px] w-[20px]" />}
        />
        {errors.email && (
          <span className="font-inter text-[12px] text-red-500">{errors.email}</span>
        )}
      </div>

      {/* Password Field */}
      <div className="flex w-full flex-col gap-[8px]">
        <div className="flex w-full items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <button
            type="button"
            className="font-inter text-[14px] font-normal text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          >
            Forgot password?
          </button>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          icon={<Lock className="h-[20px] w-[20px]" />}
        />
        {errors.password && (
          <span className="font-inter text-[12px] text-red-500">{errors.password}</span>
        )}
      </div>

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </form>
  );
}
