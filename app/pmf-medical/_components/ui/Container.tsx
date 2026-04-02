import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-20 ${className}`} {...props}>
      {children}
    </div>
  );
}
