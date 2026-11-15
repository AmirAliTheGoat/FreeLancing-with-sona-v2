import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#2e1065] text-white hover:bg-[#4c1d95] focus:ring-[#2e1065]", // Deep Purple from palette
    secondary: "bg-[#f97316] text-white hover:bg-[#ea580c] focus:ring-[#f97316]", // Orange from palette
    outline: "border border-gray-300 text-[#2e1065] hover:border-[#2e1065] hover:bg-[#2e1065] hover:text-white bg-transparent",
    ghost: "text-gray-600 hover:text-[#2e1065] hover:bg-violet-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
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