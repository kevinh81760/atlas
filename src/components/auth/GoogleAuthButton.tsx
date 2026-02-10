interface GoogleAuthButtonProps {
  onClick?: () => void;
}

export function GoogleAuthButton({ onClick }: GoogleAuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[56px] w-full items-center justify-center gap-[12px] rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
    >
      <span className="material-symbols-rounded text-[20px] text-[var(--text-primary)]" style={{ fontWeight: 101 }}>
        g_translate
      </span>
      <span className="font-inter text-[16px] font-medium text-[var(--text-primary)]">
        Continue with Google
      </span>
    </button>
  );
}
