import Wrapper from '../Wrapper/Wrapper';

export default function Footer() {
  return (
    <footer className=" h-14 w-full bg-slate-600 text-slate-300">
      <Wrapper className="h-full">
        <div className="flex h-full items-center justify-between max-[375px]:flex-col max-[375px]:justify-evenly md:px-4">
          <p className="text-sm">&copy; 2024 All rights reserved.</p>
          <p className="text-xs">
            Developed by{' '}
            <a href="https://github.com/shevchanski" className="underline">
              Oleksii Shevchenko
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
