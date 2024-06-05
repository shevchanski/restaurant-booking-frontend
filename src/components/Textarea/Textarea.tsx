import uniqueHtmlId from '@/utils/uniqueHtmlId';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  labelText: React.ReactNode;
  inputIcon?: React.ReactNode;
  errorMessage?: string;
  textareaStyle?: string;
  inputType?: 'input' | 'textarea';
}

/**
 * This component return label and textarea
 * @param {React.ReactNode} children children will be placed into label, better to use string, but if you want you can use other variants
 * @returns {React.ReactNode}
 */
const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  {
    labelText,
    className,
    inputIcon,
    required,
    inputType = 'input',
    textareaStyle,
    errorMessage,
    ...rest
  }: Props,
  ref,
) {
  const _id = uniqueHtmlId('input-');

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
          <span className="ml-2 text-[10px]">(optional)</span>
        )}
      </label>
      <div className="relative">
        <textarea
          className={clsx(
            'aria-disabled: peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500',
            { 'pl-10': inputIcon },
            textareaStyle,
          )}
          id={_id}
          required={required}
          ref={ref}
          {...rest}
        ></textarea>
        {inputIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
            {inputIcon}
          </div>
        )}
      </div>
      {errorMessage && <p className="">{errorMessage}</p>}
    </div>
  );
});

export default Textarea;
