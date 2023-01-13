interface IBase {
  name: string;
  url: string;
}

export interface ISimplePokemon extends IBase {}

export interface APISimplePokemon {
  count: number;
  next: string;
  previous: string;
  results: ISimplePokemon[];
}

export interface IPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: IBase[];
  game_indices: Index[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  past_types: any[];
  species: IBase;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: IBase;
  is_hidden: boolean;
  slot: number;
}

interface Index {
  game_index: number;
  version: IBase;
}

interface HeldItem {
  item: IBase;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: IBase;
}

interface Mfe {
  move: IBase;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IBase;
  version_group: IBase;
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
  versions: Versions;
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

interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

interface GenerationI {
  'red-blue': RedBlue;
  yellow: Yellow;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIv {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

interface DiamondPearl {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface HeartgoldSoulsilver {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface Platinum {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationV {
  'black-white': BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface Animated {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface XY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

interface Icons {
  front_default: string;
  front_female: any;
}

interface UltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationViii {
  icons: Icons2;
}

interface Icons2 {
  front_default: string;
  front_female: any;
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
