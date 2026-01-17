import { useState } from 'react';

import { SearchIcon } from '@/assets/icons';
import Input from '@/shared/components/input';
import Select from '@/shared/components/select';
import {
  GENDER_SELECT_DATA,
  SPECIES_SELECT_DATA,
  STATUS_SELECT_DATA,
} from '@/shared/constants/select-data';
import type { Gender, Species, Status } from '@/shared/types';

import './filter-panel.scss';

export default function FilterPanel() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState<Species | undefined>(undefined);
  const [gender, setGender] = useState<Gender | undefined>(undefined);
  const [status, setStatus] = useState<Status | undefined>(undefined);

  const onChange = (value: string) => {
    setName(value);
  };

  return (
    <section className='filters'>
      <Input
        icon={<SearchIcon />}
        placeholder='Filter by name...'
        value={name}
        variant='outlined'
        onChange={onChange}
      />
      <Select
        options={SPECIES_SELECT_DATA}
        placeholder='Species'
        value={species}
        onChange={setSpecies}
      />
      <Select
        options={GENDER_SELECT_DATA}
        placeholder='Gender'
        value={gender}
        onChange={setGender}
      />
      <Select
        options={STATUS_SELECT_DATA}
        placeholder='Status'
        value={status}
        onChange={setStatus}
      />
    </section>
  );
}
