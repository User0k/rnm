import type { Gender, Species, Status } from '.';

export interface FilterState {
  name: string;
  species?: Species;
  gender?: Gender;
  status?: Status;
}
