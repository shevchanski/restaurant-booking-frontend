// components/Attention.js
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function InfoBox({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-blue-300 bg-blue-100 p-4 text-blue-700 dark:bg-blue-200 dark:text-blue-800',
        className,
      )}
      role="alert"
    >
      <ExclamationCircleIcon className="h-10 w-10" />
      {children}
    </div>
  );
}
