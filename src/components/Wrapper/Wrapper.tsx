import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <div className="mx-auto h-full w-full max-w-[1280px] px-5">{children}</div>
  );
}
