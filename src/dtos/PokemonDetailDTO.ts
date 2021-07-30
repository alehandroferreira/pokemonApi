export interface PokemonDetailDTO {
  id: number;
  name: string;
  image: string;
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    name: string;
  }[];
}
