import { getButtonClassName } from '@/utils/getBtnClassName';
import Image from 'next/image';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  invert?: boolean;
  iconSrc?: string;
}

export default function LinkButton({
  children,
  invert = false,
  iconSrc,
  ...rest
}: ButtonProps) {
  return (
    <a {...rest} className={getButtonClassName(invert)}>
      {iconSrc && (
        <Image src={iconSrc} alt="Sign-in button icon" width={19} height={19} />
      )}
      {children}
    </a>
  );
}
