import { useState } from 'react';

import { SearchIcon } from '../../../assets/icons';

import Input from '.';

export function LargeInput() {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Input
      icon={<SearchIcon />}
      placeholder='Filter by name...'
      value={value}
      onChange={onChange}
    />
  );
}

export function SmallInput() {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Input
      placeholder='Name...'
      size='small'
      value={value}
      onChange={onChange}
    />
  );
}
