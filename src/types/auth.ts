export type AuthTab = 'signin' | 'signup';

export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthFormErrors {
  email?: string;
  password?: string;
}
