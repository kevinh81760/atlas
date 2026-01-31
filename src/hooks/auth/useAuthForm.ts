import { useState } from 'react';
import { AuthFormData, AuthFormErrors } from '@/components/auth/types';

export function useAuthForm(onSubmit?: (data: AuthFormData) => void) {
  const [values, setValues] = useState<AuthFormData>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<AuthFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof AuthFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: AuthFormErrors = {};
    if (!values.email) {
      newErrors.email = 'Email is required';
    }
    if (!values.password) {
      newErrors.password = 'Password is required';
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
