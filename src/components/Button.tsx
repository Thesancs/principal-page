import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'relative font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center';
  
  const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/50',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/50',
  outlined: 'border-2 border-primary text-primary hover:bg-primary/10',
};
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;