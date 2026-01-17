import type { Gender, Species, Status } from '../types';

interface SelectOption<T extends string> {
  label: T;
  value: Lowercase<T>;
}

export const SPECIES_SELECT_DATA: SelectOption<Species>[] = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' },
];

export const GENDER_SELECT_DATA: SelectOption<Gender>[] = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' },
];

export const STATUS_SELECT_DATA: SelectOption<Status>[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' },
];
