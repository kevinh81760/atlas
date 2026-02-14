import { InputProps } from './types';

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="flex h-[56px] w-full items-center gap-[12px] rounded-[8px] border border-[#E4E4E7] bg-white px-[16px]">
      {icon && <span className="text-[#71717A]">{icon}</span>}
      <input
        {...props}
        className={`flex-1 bg-transparent font-inter text-[16px] font-normal text-black placeholder:text-[#71717A] outline-none ${className || ''}`}
      />
    </div>
  );
}
