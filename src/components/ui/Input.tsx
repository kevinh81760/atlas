import { InputProps } from './types';

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="flex h-[56px] w-full items-center gap-[12px] rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-[16px]">
      {icon && <span className="text-[var(--text-muted)]">{icon}</span>}
      <input
        {...props}
        className={`flex-1 bg-transparent font-inter text-[16px] font-normal text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none ${className || ''}`}
      />
    </div>
  );
}
