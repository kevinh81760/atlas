/**
 * Utility function to merge class names
 * Can be extended with clsx or tailwind-merge if needed
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
