import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'brand' | 'white' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center rounded-control font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 active:scale-[0.985]';

  const variants = {
    primary:
      'bg-ink text-white border-[1.5px] border-ink shadow-[0_2px_10px_-2px_rgba(14,14,14,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-neutral-800 hover:border-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-6px_rgba(14,14,14,0.38)]',
    brand:
      'bg-ink text-white border-[1.5px] border-ink shadow-[0_2px_10px_-2px_rgba(14,14,14,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-neutral-800 hover:border-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-6px_rgba(14,14,14,0.38)]',
    white:
      'bg-white text-ink border-[1.5px] border-white shadow-[0_4px_18px_-4px_rgba(0,0,0,0.45),inset_0_1px_0_#ffffff] hover:bg-neutral-100 hover:border-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.6)]',
    secondary:
      'bg-surface-muted text-ink border-[1.5px] border-border shadow-subtle hover:bg-white hover:border-ink/40 hover:-translate-y-0.5',
    outline:
      'bg-transparent text-ink border-[1.5px] border-ink/25 hover:border-ink hover:bg-ink hover:text-white hover:-translate-y-0.5',
    ghost:
      'text-ink-muted border-[1.5px] border-transparent hover:text-ink hover:border-border hover:bg-surface-muted/70',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs sm:text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm sm:text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
