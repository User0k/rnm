import { useState } from 'react';

import Select from '../../../shared/components/select';
import StatusDot from '../../../shared/components/status-dot';
import type { Status } from '../../../shared/types';

type OptionWithStatus = {
  label: Status;
  value: Status;
};

const STATUS_DATA: OptionWithStatus[] = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'Unknown' },
];

export default function CardSelect({ status }: { status: Status }) {
  const [selectedValue, setSelectedValue] = useState(status);

  const options = STATUS_DATA.map((option) => ({
    value: option.value,
    label: option.label,
    labelComponent: <StatusDot status={option.value} />,
  }));

  const initialOption = options.find((option) => option.label === status);

  return (
    <Select
      value={selectedValue}
      onChange={setSelectedValue}
      options={options}
      placeholder={
        <>
          {initialOption?.label}
          {initialOption?.labelComponent}
        </>
      }
      size='small'
    />
  );
}
