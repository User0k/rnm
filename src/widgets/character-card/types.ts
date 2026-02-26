import type { Gender, Species, Status } from '@/shared/types';

export interface CharacterCardProps {
  gender: Gender;
  image: string;
  location: string;
  name: string;
  species: Species;
  status: Status;
}
