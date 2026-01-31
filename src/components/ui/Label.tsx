import { LabelProps } from './types';

export function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-inter text-[14px] font-normal text-[var(--text-primary)] ${className || ''}`}
    >
      {children}
    </label>
  );
}
