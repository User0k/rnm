import { useEffect, useRef, useState } from 'react';

import type { HTMLAttributes, ReactNode } from 'react';

import { ArrowDownIcon } from '../../../assets/icons';

import './select.css';

interface OptionProps<T> {
  label: ReactNode;
  value: T;
  labelComponent?: ReactNode;
}

interface SelectProps<T> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  disabled?: boolean;
  onChange?: (value: T) => void;
  options?: OptionProps<T>[];
  placeholder?: ReactNode;
  size?: 'large' | 'small';
  value?: T;
}

export default function Select<T>({
  className = '',
  disabled = false,
  onChange,
  options = [],
  placeholder = '',
  size = 'large',
  value,
  ...props
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const currentOption = options.find((opt) => opt.value === value);
  const placeholderOption = options.find((opt) => opt.label === placeholder);

  const selectClassName = `select-${size} ${className}`.trim();
  const placeholderClassName = `select__placeholder${disabled ? ' select__placeholder_disabled ' : ''}`;
  const arrowClassName = `select__arrow${isOpen ? ' select__arrow_open' : ''}`;

  const getOptionClassName = (option: OptionProps<T>) =>
    `select__option${option.value === value ? ' select__option_selected' : ''}`;

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: T) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={selectClassName}
      {...props}
    >
      <button
        className={placeholderClassName}
        onClick={toggleDropdown}
      >
        <p className='select__value'>
          {currentOption?.label ?? placeholder}
          {currentOption?.labelComponent ?? placeholderOption?.labelComponent}
        </p>
        <ArrowDownIcon className={arrowClassName} />
      </button>

      {!disabled && isOpen && (
        <ul className='select__dropdown'>
          {options.map((option, index) => (
            <li
              key={index}
              className={getOptionClassName(option)}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
              {option.labelComponent}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
