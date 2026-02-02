'use client';

import { User, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import { useSignUpForm } from '@/lib/auth/useSignUpForm';
import { SignUpFormData } from '@/lib/auth/types';

interface SignUpFormProps {
  onSubmit?: (data: SignUpFormData) => void;
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const { values, errors, handleChange, handleSubmit } = useSignUpForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[24px]">
      {/* Full Name Field */}
      <div className="flex w-full flex-col gap-[8px]">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={values.fullName}
          onChange={handleChange}
          icon={<User className="h-[20px] w-[20px]" />}
        />
        {errors.fullName && (
          <span className="font-inter text-[12px] text-red-500">{errors.fullName}</span>
        )}
      </div>

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
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          icon={<Lock className="h-[20px] w-[20px]" />}
        />
        <span className="font-inter text-[12px] text-[var(--text-muted)]">
          Must be at least 6 characters
        </span>
        {errors.password && (
          <span className="font-inter text-[12px] text-red-500">{errors.password}</span>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="flex w-full flex-col gap-[8px]">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          icon={<Lock className="h-[20px] w-[20px]" />}
        />
        {errors.confirmPassword && (
          <span className="font-inter text-[12px] text-red-500">{errors.confirmPassword}</span>
        )}
      </div>

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </form>
  );
}
