import { useState } from 'react';

import Input from '../../../shared/components/input';

export default function CardInput({ name }: { name: string }) {
  const [value, setValue] = useState(name);

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Input
      placeholder='Character name'
      size='small'
      value={value}
      onChange={onChange}
    />
  );
}
