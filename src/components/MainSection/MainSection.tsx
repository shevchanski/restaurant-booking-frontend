import Wrapper from '../Wrapper/Wrapper';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function MainSection({ children, ...rest }: Props) {
  return (
    <main className=" w-full flex-1 py-20 text-black" {...rest}>
      <Wrapper>{children}</Wrapper>
    </main>
  );
}
