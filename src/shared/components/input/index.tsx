import type { HTMLAttributes, ReactNode } from 'react';

import { CloseIcon } from '../../../assets/icons';
import clsx from '../../utils/clsx';

import './input.css';

interface InputProps extends Omit<
  HTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  value: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: 'large' | 'small';
}

export default function Input({
  className,
  icon,
  onChange,
  placeholder,
  size = 'large',
  value,
}: InputProps) {
  const handleClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div className={clsx(`input_${size}`, className)}>
      {icon && <div className='input__icon'>{icon}</div>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type='text'
      />
      {value && (
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
