import { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  id?: string;
}

export interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

export interface DividerProps {
  text?: string;
  className?: string;
}
