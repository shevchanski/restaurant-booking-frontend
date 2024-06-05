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
    <main className={clsx(mainBoxStyle, ' w-full flex-1 py-20 text-black')}>
      <Wrapper>
        <div className={innerBoxStyle}>{children}</div>
      </Wrapper>
    </main>
  );
}
