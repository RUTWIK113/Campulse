
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-brand-surface-light dark:bg-brand-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-brand-text-light dark:text-brand-text-dark focus:outline-none focus:ring-2 focus:ring-brand-primary-light dark:focus:ring-brand-primary-dark focus:border-transparent placeholder-brand-text-secondary-light dark:placeholder-brand-text-secondary-dark"
        {...props}
      />
    </div>
  );
};