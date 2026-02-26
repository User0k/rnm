import { SearchIcon } from '@/assets/icons';
import { Input, Select } from '@/shared/components';
import {
  GENDER_SELECT_DATA,
  SPECIES_SELECT_DATA,
  STATUS_SELECT_DATA,
} from '@/shared/constants/select-data';
import type { FilterState, Gender, Species, Status } from '@/shared/types';

import './filter-panel.scss';

interface FilterPanelProps {
  filters: FilterState;
  onGenderChange: (value: Gender | undefined) => void;
  onNameChange: (value: string) => void;
  onSpeciesChange: (value: Species | undefined) => void;
  onStatusChange: (value: Status | undefined) => void;
}

export default function FilterPanel({
  filters,
  onGenderChange,
  onNameChange,
  onSpeciesChange,
  onStatusChange,
}: FilterPanelProps) {
  return (
    <section className='filters'>
      <Input
        icon={<SearchIcon />}
        placeholder='Filter by name...'
        value={filters.name}
        variant='outlined'
        onChange={onNameChange}
      />
      <Select
        options={SPECIES_SELECT_DATA}
        placeholder='Species'
        value={filters.species}
        onChange={onSpeciesChange}
      />
      <Select
        options={GENDER_SELECT_DATA}
        placeholder='Gender'
        value={filters.gender}
        onChange={onGenderChange}
      />
      <Select
        options={STATUS_SELECT_DATA}
        placeholder='Status'
        value={filters.status}
        onChange={onStatusChange}
      />
    </section>
  );
}
