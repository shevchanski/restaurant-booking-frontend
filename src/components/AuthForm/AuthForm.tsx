import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/solid';
import LinkButton from '../LinkButton/LinkButton';

interface Props {
  isLoginForm: boolean;
}

export default function AuthForm({ isLoginForm }: Props) {
  const title = isLoginForm ? 'Log In' : 'Sign Up';
  const buttonText = isLoginForm ? 'Log In' : 'Sign Up';

  return (
    <form className="flex min-w-[329px] flex-col items-center  rounded-xl bg-gray-50 px-6 pb-4 pt-8">
      <h1 className="mb-3 text-center text-2xl">
        {title.split(' ').shift() + ' '}
        <span className="text-red-500">{title.split(' ').pop()}</span>{' '}
      </h1>
      <div className="w-full">
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        {!isLoginForm && (
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        )}
      </div>
      <LinkButton className="mt-6 w-fit grow-0">{buttonText}</LinkButton>
      <hr className=" my-4 w-11/12  border-gray-200"></hr>
      <div className=" flex w-full justify-center gap-1 text-sm">
        <p>{isLoginForm ? 'Does not have account?' : 'Have account?'}</p>
        <a
          href={`${isLoginForm ? '/signup' : '/login'}`}
          className="text-blue-500 hover:cursor-pointer hover:underline"
        >
          {isLoginForm ? 'Sign up' : 'Log in'}
        </a>
      </div>

      {/* <div className="flex h-8 items-end space-x-1">
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500 " />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div> */}
    </form>
  );
}
