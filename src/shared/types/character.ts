export type Status = 'Alive' | 'Dead' | 'Unknown';

export type Gender = 'Female' | 'Male' | 'Genderless' | 'Unknown';

export type Species =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'Animal'
  | 'Robot'
  | 'Cronenberg'
  | 'Disease'
  | 'Unknown';

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  location: {
    name: string;
  };
  image: string;
}
