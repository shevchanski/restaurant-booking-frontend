import { atma } from '@/constants/fonts';

export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <h2
        className={`${atma.className} text-center text-4xl font-medium text-black md:text-5xl`}
      >
        {children}
      </h2>
      <span className="mt-3 md:mt-6">
        <svg
          width="104"
          height="6"
          viewBox="0 0 104 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 md:w-fit"
        >
          <rect width="82.7574" height="6" rx="3" fill="#E93740" />
          <rect x="87.1836" width="16.817" height="6" rx="3" fill="#E93740" />
        </svg>
      </span>
    </div>
  );
}
