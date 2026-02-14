import { ButtonProps } from './types';

export function Button({ variant = 'secondary', children, onClick, type = 'button', className }: ButtonProps) {
  const baseStyles = 'flex items-center justify-center font-inter text-[16px] transition-colors';
  
  const variantStyles = {
    primary: 'h-[56px] rounded-[8px] bg-black hover:bg-black/90 font-semibold text-white',
    secondary: 'h-[56px] rounded-[8px] border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] font-medium text-black',
    ghost: 'h-[48px] rounded-[8px] bg-white font-normal text-[#71717A]',
  };

  const activeStyles = variant === 'ghost' 
    ? 'bg-[#F4F4F5] font-medium text-black'
    : '';

  const classNames = [baseStyles, variantStyles[variant], activeStyles, className].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
}
