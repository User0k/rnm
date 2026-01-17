import type { Gender, Species, Status } from '@/shared/types';

export interface CardProps {
  gender: Gender;
  location: string;
  name: string;
  species: Species;
  status: Status;
}
