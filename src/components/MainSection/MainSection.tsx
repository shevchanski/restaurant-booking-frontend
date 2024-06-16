import clsx from 'clsx';
import Wrapper from '../Wrapper/Wrapper';

interface Props {
  children: React.ReactNode;
  mainBoxStyle?: string;
  innerBoxStyle?: string;
}

export default function MainSection({
  children,
  mainBoxStyle,
  innerBoxStyle,
}: Props) {
  return (
    <main
      className={clsx(mainBoxStyle, ' w-full flex-1 py-10 text-black md:py-20')}
    >
      <Wrapper className={innerBoxStyle}>{children}</Wrapper>
    </main>
  );
}
