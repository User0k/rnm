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

export function MockedSelectSmall() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  const options = [
    { label: 'Alive', value: 'alive' as Status },
    { label: 'Dead', value: 'dead' as Status },
    { label: 'Unknown', value: 'unknown' as Status },
  ].map((option) => ({
    value: option.value,
    label: option.label,
    labelComponent: <StatusDot status={option.value} />,
  }));

  return (
    <Select
      value={selectedValue}
      onChange={setSelectedValue}
      options={options}
      placeholder={options[0].label}
      size='small'
    />
  );
}
