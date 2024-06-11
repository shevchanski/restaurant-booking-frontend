'use client';

import uniqueHtmlId from '@/utils/uniqueHtmlId';
import clsx from 'clsx';
import React, { MouseEvent, forwardRef, useRef } from 'react';
import { FieldErrors } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: React.ReactNode;
  inputIcon?: React.ReactNode;
  errorMessage?: string;
  validErrors?: FieldErrors;
}

/**
 * This component return label and input
 * @param {React.ReactNode} children children will be placed into label, better to use string, but if you which you can use other variants
 * @returns {React.ReactNode}
 */
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    labelText,
    className,
    inputIcon,
    required,
    errorMessage,
    name,
    validErrors,
    type,
    ...rest
  }: Props,
  ref,
) {
  const _id = uniqueHtmlId('input-');
  const isInvalid = errorMessage
    ? true
    : validErrors && name && validErrors[name]
      ? true
      : false;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const errorMsg = errorMessage
    ? errorMessage
    : validErrors && name
      ? validErrors[name]?.message?.toString()
      : undefined;

  const handleClearFileInput = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const refInput = (e: HTMLInputElement) => {
    if (type === 'file') {
      fileInputRef.current = e;
    }

    if (typeof ref === 'function') {
      ref(e);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current = e;
    }
  };

  return (
    <div className={className}>
      <label
        htmlFor={_id}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {labelText}
        {required ? (
          <span className=" ml-1 text-red-600">*</span>
        ) : (
          <span className="ml-2 text-[8px] leading-none">(optional)</span>
        )}
      </label>
      <div className="relative">
        <input
          className={clsx(
            'aria-disabled: invalid:[&not:(:placeholder-shown)]:border-red-500 focus:invalid:[&not:(:placeholder-shown)]:ring-red-500 peer block w-full rounded-md border border-gray-200 px-[12px] py-[9px] text-sm  outline-2  placeholder:text-gray-500',
            { 'pl-10': inputIcon },
          )}
          name={name}
          id={_id}
          ref={refInput}
          required={required}
          type={type}
          {...rest}
        />

        {inputIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
            {inputIcon}
          </div>
        )}
        {type === 'file' && (
          <button
            onClick={handleClearFileInput}
            className="cursor absolute right-4 top-1/2 -translate-y-1/2 rounded-md border px-3 py-1 text-xs shadow-sm duration-100 hover:bg-slate-100"
          >
            Clear
          </button>
        )}
      </div>
      <p
        role="alert"
        className={clsx(
          'mb-1 mt-[2px] h-4 pl-2 text-xs text-red-600 duration-75',
          {
            'opacity-0': !isInvalid,
            'opacity-100': isInvalid,
          },
        )}
      >
        {errorMsg}
      </p>
    </div>
  );
});

export default Input;
