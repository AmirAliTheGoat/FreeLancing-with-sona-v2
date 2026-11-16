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
    'group inline-flex items-center justify-center rounded-control font-semibold tracking-[0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-250 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100';

  const variants = {
    primary:
      'bg-ink text-white border-[1.5px] border-ink shadow-soft hover:bg-brand-hover hover:border-brand-hover hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-accent focus-visible:ring-offset-surface',
    brand:
      'bg-ink text-white border-[1.5px] border-ink shadow-soft hover:bg-brand-hover hover:border-brand-hover hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-accent focus-visible:ring-offset-surface',
    white:
      'bg-white text-ink border-[1.5px] border-white shadow-[0_4px_18px_-4px_rgba(0,0,0,0.45),inset_0_1px_0_#ffffff] hover:bg-surface-warm hover:border-surface-sand hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.6)] focus-visible:ring-white focus-visible:ring-offset-obsidian',
    secondary:
      'bg-surface-muted text-ink border-[1.5px] border-border shadow-subtle hover:bg-surface hover:border-ink/40 hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-accent focus-visible:ring-offset-surface',
    outline:
      'bg-transparent text-ink border-[1.5px] border-ink/25 hover:border-ink hover:bg-ink hover:text-white hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-accent focus-visible:ring-offset-surface',
    ghost:
      'text-ink-muted border-[1.5px] border-transparent hover:text-ink hover:border-border hover:bg-surface-muted/70 hover:-translate-y-[1px] focus-visible:ring-accent focus-visible:ring-offset-surface',
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
