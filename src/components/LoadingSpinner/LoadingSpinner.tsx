import clsx from 'clsx';

interface Props {
  className?: string;
}

export default function LoadingSpinner({ className }: Props) {
  return (
    <div
      className={clsx(className, 'flex h-28 w-28 items-center justify-center')}
    >
      <h2>Loading...</h2>
      <div className=" absolute h-28 w-28 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
    </div>
  );
}
