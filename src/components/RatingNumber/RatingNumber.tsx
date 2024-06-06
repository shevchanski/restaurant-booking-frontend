import clsx from 'clsx';

interface Props {
  rating: number;
  className?: string;
}

export default function RatingNumber({ rating, className }: Props) {
  return (
    <p className={clsx(className, ' tracking-[5px]')}>
      <span className="mr-[5px] tracking-normal text-red-500">{rating}</span>
      /5
    </p>
  );
}
