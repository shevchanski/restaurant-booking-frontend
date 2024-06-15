import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: Props) {
  return (
    <div
      className={clsx(className, 'mx-auto w-full max-w-[1280px] px-2 md:px-0')}
    >
      {children}
    </div>
  );
}
