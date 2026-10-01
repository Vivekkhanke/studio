'use client';

/** Displays the final value without a count-up animation. */
export function CountUp({ to, decimals = 0, className }: { to: number; decimals?: number; className?: string }) {
  return <span className={className}>{to.toFixed(decimals)}</span>;
}
