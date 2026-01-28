import { ButtonProps } from '@/types/ui';
import { cn } from '@/lib/utils';

export function Button({ variant = 'secondary', children, onClick, type = 'button', className }: ButtonProps) {
  const baseStyles = 'flex items-center justify-center font-inter text-[16px] transition-colors';
  
  const variantStyles = {
    primary: 'h-[56px] rounded-[8px] bg-[var(--bg-button)] hover:opacity-90 font-semibold text-[var(--text-primary)]',
    secondary: 'h-[56px] rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] font-medium text-[var(--text-primary)]',
    ghost: 'h-[48px] rounded-[8px] bg-[var(--bg-secondary)] font-normal text-[var(--text-muted)]',
  };

  const activeStyles = variant === 'ghost' 
    ? 'bg-[var(--bg-tertiary)] font-medium text-[var(--text-primary)]'
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], activeStyles, className)}
    >
      {children}
    </button>
  );
}
