import { DividerProps } from './types';

export function Divider({ text = 'OR CONTINUE WITH EMAIL', className }: DividerProps) {
  return (
    <div className={`flex w-full items-center gap-[16px] ${className || ''}`}>
      <div className="h-[1px] flex-1 bg-[#E4E4E7]"></div>
      <span className="font-inter text-[12px] font-medium text-[#71717A]">
        {text}
      </span>
      <div className="h-[1px] flex-1 bg-[#E4E4E7]"></div>
    </div>
  );
}
