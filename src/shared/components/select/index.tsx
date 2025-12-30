import { useEffect, useRef, useState } from 'react';

import type { HTMLAttributes, ReactNode } from 'react';

import { ArrowDownIcon } from '../../../assets/icons';

import './select.css';

interface OptionProps<T> {
  label: ReactNode;
  value: T;
}

interface SelectProps<T> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'defaultValue' | 'onChange'
> {
  defaultValue?: T;
  disabled?: boolean;
  onChange?: (value: T) => void;
  options?: OptionProps<T>[];
  placeholder?: ReactNode;
  size?: 'large' | 'small';
  value?: T;
}

export default function Select<T>({
  className = '',
  defaultValue,
  disabled = false,
  onChange,
  options = [],
  placeholder = '',
  size = 'large',
  value,
  ...props
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
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

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const selectClassName = `select-${size} ${className}`.trim();
  const placeholderClassName = `select__placeholder${disabled ? ' select__placeholder_disabled ' : ''}`;
  const arrowClassName = `select__arrow${isOpen ? ' select__arrow_open' : ''}`;

  const getOptionClassName = (option: OptionProps<T>) =>
    `select__option${
      option.value === selectedValue ? ' select__option_selected' : ''
    }`;

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: T) => {
    setSelectedValue(optionValue);

    if (onChange) {
      onChange(optionValue);
    }

    setIsOpen(false);
  };

  const getLabel = () => {
    if (selectedOption) {
      return selectedOption.label;
    }

    if (value !== undefined) {
      const valueOption = options.find((option) => option.value === value);
      if (valueOption) {
        return valueOption.label;
      }
    }

    return placeholder;
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
        <span className='select__value'>{getLabel()}</span>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
