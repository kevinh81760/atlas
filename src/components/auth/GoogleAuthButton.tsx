interface GoogleAuthButtonProps {
  onClick?: () => void;
}

export function GoogleAuthButton({ onClick }: GoogleAuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[56px] w-full items-center justify-center gap-[12px] rounded-[8px] border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] transition-colors"
    >
      <span className="material-symbols-rounded text-[20px] text-black" style={{ fontWeight: 101 }}>
        g_translate
      </span>
      
      <span className="font-inter text-[16px] font-medium text-black">
        Continue with Google
      </span>
    </button>
  );
}
