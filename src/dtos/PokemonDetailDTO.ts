export interface PokemonDetailDTO {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  id: number;
  name: string;
  image: string;
  weight: number;
  height: number;
  stats: {
    name: string;
    base_stat: number;
  }[];
}
