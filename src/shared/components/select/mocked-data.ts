import type { Status } from '../status-dot';

type OptionWithStatus = {
  label: Capitalize<Status>;
  value: Status;
};

export const LARGE_SELECT_DATA = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' },
];

export const SMALL_SELECT_DATA: OptionWithStatus[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' },
];
