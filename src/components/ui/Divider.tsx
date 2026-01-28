import { DividerProps } from '@/types/ui';

export function Divider({ text = 'OR CONTINUE WITH EMAIL', className }: DividerProps) {
  return (
    <div className={`flex w-full items-center gap-[16px] ${className || ''}`}>
      <div className="h-[1px] flex-1 bg-[var(--bg-tertiary)]"></div>
      <span className="font-inter text-[12px] font-medium text-[var(--text-muted)]">
        {text}
      </span>
      <div className="h-[1px] flex-1 bg-[var(--bg-tertiary)]"></div>
    </div>
  );
}
