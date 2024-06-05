// components/Attention.js
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Attention({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-yellow-300 bg-yellow-100 p-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800',
        className,
      )}
      role="alert"
    >
      <ExclamationTriangleIcon className="mr-3 h-5 w-5 text-yellow-600 dark:text-yellow-900" />
      {children}
    </div>
  );
}
