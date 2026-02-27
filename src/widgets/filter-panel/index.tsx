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
  handleGenderChange: (value: Gender | undefined) => void;
  handleNameChange: (value: string) => void;
  handleSpeciesChange: (value: Species | undefined) => void;
  handleStatusChange: (value: Status | undefined) => void;
}

export default function FilterPanel({
  filters,
  handleGenderChange,
  handleNameChange,
  handleSpeciesChange,
  handleStatusChange,
}: FilterPanelProps) {
  return (
    <section className='filters'>
      <Input
        icon={<SearchIcon />}
        placeholder='Filter by name...'
        value={filters.name}
        variant='outlined'
        onChange={handleNameChange}
      />
      <Select
        options={SPECIES_SELECT_DATA}
        placeholder='Species'
        value={filters.species}
        onChange={handleSpeciesChange}
      />
      <Select
        options={GENDER_SELECT_DATA}
        placeholder='Gender'
        value={filters.gender}
        onChange={handleGenderChange}
      />
      <Select
        options={STATUS_SELECT_DATA}
        placeholder='Status'
        value={filters.status}
        onChange={handleStatusChange}
      />
    </section>
  );
}
