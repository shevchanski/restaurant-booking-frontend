import uniqueHtmlId from '@/utils/uniqueHtmlId';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: React.ReactNode;
  inputIcon?: React.ReactNode;
}

/**
 * This component return label and input
 * @param {React.ReactNode} children children will be placed into label, better to use string, but if you which you can use other variants
 * @returns {React.ReactNode}
 */
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { labelText, className, inputIcon, ...rest }: Props,
  ref,
) {
  const _id = uniqueHtmlId('input-');

  return (
    <div>
      <label
        htmlFor={_id}
        className="mb-3 block text-xs font-medium text-gray-900"
      >
        {labelText}
      </label>
      <div className="relative">
        <input
          className={clsx(
            className,
            'aria-disabled: peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500',
          )}
          id={_id}
          ref={ref}
          {...rest}
        />
        <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
          {inputIcon}
        </div>
      </div>
    </div>
  );
});

export default Input;
