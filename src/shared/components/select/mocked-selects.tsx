import { useState } from 'react';

import { LARGE_SELECT_DATA } from './mocked-data';
import Select from '.';

export function MockedSelectLarge() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  return (
    <Select
      value={selectedValue}
      onChange={setSelectedValue}
      options={LARGE_SELECT_DATA}
      placeholder='Species'
    />
  );
}
