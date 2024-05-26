'use client';

import { authenticate } from '@/actions/actions';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useFormState, useFormStatus } from 'react-dom';
import { getButtonClassName } from '../helpers/getBtnClassName';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const handleSubmit = (formData: FormData) => {
    console.log(formData);

    dispatch(formData);
  };

  return (
    <form
      action={handleSubmit}
      className="flex min-w-[329px] flex-col items-center  rounded-xl bg-gray-50 px-6 pb-4 pt-8"
    >
      <h1 className="mb-3 text-center text-2xl">
        Log
        <span className="text-red-500">In</span>{' '}
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
      </div>
      <div
        className={`${errorMessage ? 'flex' : 'hidden'} h-8 items-end space-x-1`}
      >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500 " />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
      <LoginButton>Log in</LoginButton>
      <hr className=" my-4 w-11/12  border-gray-200"></hr>
      <div className=" flex w-full justify-center gap-1 text-sm">
        <p>Does not have account?</p>
        <a
          href="/signup"
          className="text-blue-500 hover:cursor-pointer hover:underline"
        >
          Register
        </a>
      </div>
    </form>
  );
}

function LoginButton({ children }: { children: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className={clsx(getButtonClassName(false), ' mt-6 w-fit grow-0')}
      type="submit"
    >
      {children}
    </button>
  );
}
