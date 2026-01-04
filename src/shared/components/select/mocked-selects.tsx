import { useState } from 'react';
import Select from '.';
import StatusDot, { type Status } from '../status-dot';

export function MockedSelectLarge() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  return (
    <Select
      value={selectedValue}
      onChange={setSelectedValue}
      options={[
        { label: 'Human', value: 'human' },
        { label: 'Alien', value: 'alien' },
        { label: 'Humanoid', value: 'humanoid' },
        { label: 'Animal', value: 'animal' },
        { label: 'Robot', value: 'robot' },
      ]}
      placeholder='Species'
    />
  );
}

type OptionWithStatus = {
  label: Capitalize<Status>;
  value: Status;
};

export function MockedSelectSmall() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  const sourceOptions: OptionWithStatus[] = [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const options = sourceOptions.map((option) => ({
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
