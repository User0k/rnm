import type { ChangeEvent, ReactNode } from 'react';

import { CloseIcon } from '@/assets/icons';
import clsx from '@/shared/utils/clsx';

import './input.scss';

interface InputProps {
  value: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: 'large' | 'small';
  variant?: 'outlined' | 'underlined';
}

export default function Input({
  className,
  disabled,
  icon,
  onChange,
  placeholder,
  size = 'large',
  value,
  variant = 'underlined',
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.value);

  const handleClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div
      className={clsx(
        'input',
        {
          input_small: size === 'small',
          input_large: size === 'large',
          input_outlined: variant === 'outlined',
          input_underlined: variant === 'underlined',
          input_disabled: disabled,
        },
        className,
      )}
    >
      {icon && <div className='input__icon'>{icon}</div>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type='text'
      />
      {value && !disabled && (
        <button
          className='input__close-icon'
          onClick={handleClear}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
