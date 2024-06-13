import clsx from 'clsx';
import Image from 'next/image';
import { getButtonClassName } from '../../utils/getBtnClassName';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  invert?: boolean;
  iconSrc?: string;
}

export default function LinkButton({
  children,
  invert = false,
  iconSrc,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a {...rest} className={clsx(getButtonClassName(invert), className)}>
      {iconSrc && (
        <Image src={iconSrc} alt="Sign-in button icon" width={19} height={19} />
      )}
      {children}
    </a>
  );
}
