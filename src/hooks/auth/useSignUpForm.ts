import { useState } from 'react';
import { SignUpFormData, SignUpFormErrors } from '@/components/auth/types';

export function useSignUpForm(onSubmit?: (data: SignUpFormData) => void) {
  const [values, setValues] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState<SignUpFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof SignUpFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: SignUpFormErrors = {};
    if (!values.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!values.email) {
      newErrors.email = 'Email is required';
    }
    if (!values.password) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!values.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call onSubmit callback if provided
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
