export interface ISimplePokemon {
  name: string;
  url: string;
}

export interface APISimplePokemon {
  count: number;
  next: string;
  previous: string;
  results: ISimplePokemon[];
}
