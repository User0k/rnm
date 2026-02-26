import Select from '@/shared/components/select';
import StatusDot from '@/shared/components/status-dot';
import { STATUS_SELECT_DATA } from '@/shared/constants/select-data';
import type { Status } from '@/shared/types';

export default function CardSelect({
  disabled,
  status,
  onChange,
}: {
  status: Status | 'unknown';
  disabled?: boolean;
  onChange: (status: Status) => void;
}) {
  const normalizedStatus: Status = status === 'unknown' ? 'Unknown' : status;

  const options = STATUS_SELECT_DATA.map((option) => ({
    value: option.value,
    label: option.label,
    labelComponent: <StatusDot status={option.value} />,
  }));

  const initialOption = options.find(
    (option) => option.label === normalizedStatus,
  );

  return (
    <Select
      disabled={disabled}
      value={normalizedStatus}
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
