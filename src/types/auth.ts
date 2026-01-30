export type AuthTab = 'signin' | 'signup';

export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthFormErrors {
  email?: string;
  password?: string;
}

export interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpFormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
