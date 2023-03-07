import { IBase } from './base';

export interface ISimplePokemon extends IBase {}

export interface APISimplePokemon {
  count: number;
  next: string;
  previous: string;
  results: ISimplePokemon[];
}

export interface IPokemon {
  base_experience: number;
  forms: IBase[];
  height: number;
  id: number;
  name: string;
  order: number;
  past_types: any[];
  species: IBase;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: Other;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

interface DreamWorld {
  front_default: string;
  front_female: any;
}

interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: IBase;
}

interface Type {
  slot: number;
  type: IBase;
}

export enum StatsName {
  HP = 'hp',
  ATTACK = 'attack',
  DEFENSE = 'defense',
  SPECIAL_ATTACK = 'special-attack',
  SPEACIAL_DEFENSE = 'special-defense',
  SPEED = 'speed',
}

export enum ColorType {
  dark = '#a1a1a1',
  rock = '#a1a1a1',
  grass = '#70a83b',
  bug = '#70a83b',
  ice = '#a2cff0',
  water = '#a2cff0',
  fire = '#f76545',
  fighting = '#f76545',
  dragon = '#f76545',
  normal = '#76aadb',
  gosth = '#76aadb',
  poison = '#a974bc',
  psychic = '#a974bc',
  fairy = '#a974bc',
  flying = '#a974bc',
  ghost = '#a974bc',
  ground = '#9b897b',
  electric = '#f7c545',
  not_found = '#44685E',
}
