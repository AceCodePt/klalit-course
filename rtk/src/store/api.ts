export interface PokemonListType {
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetailsType {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
