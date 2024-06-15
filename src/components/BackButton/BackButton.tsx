'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function BackButton({ children, className }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
