import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: Props) {
  return (
    <div className={clsx('mx-auto w-full max-w-[1280px] px-5', className)}>
      {children}
    </div>
  );
}
