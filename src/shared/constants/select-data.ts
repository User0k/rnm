import type { Gender, Species, Status } from '../types';

interface SelectOption<T extends string> {
  label: T;
  value: T;
}

export const SPECIES_SELECT_DATA: SelectOption<Species>[] = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Robot', value: 'Robot' },
];

export const GENDER_SELECT_DATA: SelectOption<Gender>[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'Unknown', value: 'Unknown' },
];

export const STATUS_SELECT_DATA: SelectOption<Status>[] = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'Unknown' },
];
