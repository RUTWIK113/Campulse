import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold text-base focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-brand-surface-dark transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-brand-primary-light dark:bg-brand-primary-dark text-white dark:text-gray-900 hover:opacity-90 focus:ring-brand-primary-light dark:focus:ring-brand-primary-dark shadow-lg shadow-brand-primary-light/30 dark:shadow-brand-primary-dark/40',
    secondary: 'bg-transparent text-brand-primary-light dark:text-brand-primary-dark border border-brand-primary-light dark:border-brand-primary-dark hover:bg-brand-primary-light/10 dark:hover:bg-brand-primary-dark/10 focus:ring-brand-primary-light dark:focus:ring-brand-primary-dark',
    ghost: 'bg-transparent text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-brand-surface-dark/50 dark:hover:bg-brand-surface-light/10 focus:ring-brand-primary-light dark:focus:ring-brand-secondary-dark'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};