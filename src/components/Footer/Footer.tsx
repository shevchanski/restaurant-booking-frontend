export default function Footer() {
  return (
    <footer className=" h-14 w-full bg-slate-600 ">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 text-slate-300">
        <p className="text-sm">&copy; 2024 All rights reserved.</p>
        <p className="mt-2 text-xs">
          Developed by{' '}
          <a href="https://yourdeveloperlink.com" className="underline">
            Oleksii Shevchenko
          </a>
        </p>
      </div>
    </footer>
  );
}
