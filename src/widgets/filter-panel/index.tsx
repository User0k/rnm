import { useState } from 'react';

import { SearchIcon } from '@/assets/icons';
import { Input, Select } from '@/shared/components';
import {
  GENDER_SELECT_DATA,
  SPECIES_SELECT_DATA,
  STATUS_SELECT_DATA,
} from '@/shared/constants/select-data';
import type { Gender, Species, Status } from '@/shared/types';

import './filter-panel.scss';

interface FilterState {
  name: string;
  species?: Species;
  gender?: Gender;
  status?: Status;
}

export default function FilterPanel() {
  const [filters, setFilters] = useState<FilterState>({
    name: '',
    species: undefined,
    gender: undefined,
    status: undefined,
  });

  const handleNameChange = (value: string) => {
    setFilters((prev) => ({ ...prev, name: value }));
  };

  const handleSpeciesChange = (value: Species | undefined) => {
    setFilters((prev) => ({ ...prev, species: value }));
  };

  const handleGenderChange = (value: Gender | undefined) => {
    setFilters((prev) => ({ ...prev, gender: value }));
  };

  const handleStatusChange = (value: Status | undefined) => {
    setFilters((prev) => ({ ...prev, status: value }));
  };

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
