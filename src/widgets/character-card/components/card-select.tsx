import Select from '@/shared/components/select';
import StatusDot from '@/shared/components/status-dot';
import { STATUS_SELECT_DATA } from '@/shared/constants/select-data';
import type { Status } from '@/shared/types';

export default function CardSelect({
  disabled,
  status,
  onChange,
}: {
  status: Status;
  disabled?: boolean;
  onChange: (status: Status) => void;
}) {
  const options = STATUS_SELECT_DATA.map((option) => ({
    value: option.value,
    label: option.label,
    labelComponent: <StatusDot status={option.value} />,
  }));

  const initialOption = options.find((option) => option.label === status);

  return (
    <Select
      disabled={disabled}
      value={status}
      onChange={onChange}
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
