import { useState } from 'react';

import StatusDot from '../status-dot';

import { LARGE_SELECT_DATA, SMALL_SELECT_DATA } from './mocked-data';
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

export function MockedSelectSmall() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  const options = SMALL_SELECT_DATA.map((option) => ({
    value: option.value,
    label: option.label,
    labelComponent: <StatusDot status={option.value} />,
  }));

  return (
    <Select
      value={selectedValue}
      onChange={setSelectedValue}
      options={options}
      placeholder={
        <>
          {options[0].label}
          {options[0].labelComponent}
        </>
      }
      size='small'
    />
  );
}
