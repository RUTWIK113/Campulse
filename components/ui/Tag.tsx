import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <span className={`bg-brand-secondary-dark/20 text-brand-secondary-dark text-xs font-semibold px-2.5 py-1 rounded-full ${className}`}>
      {children}
    </span>
  );
};