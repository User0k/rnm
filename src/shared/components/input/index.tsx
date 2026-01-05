import type { ChangeEvent, ReactNode } from 'react';

import { CloseIcon } from '../../../assets/icons';
import clsx from '../../utils/clsx';

import './input.css';

interface InputProps {
  value: string;
  className?: string;
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.value);

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
        onChange={handleChange}
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
