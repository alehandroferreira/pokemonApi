export interface OnePokemonDTO {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  height: number;
  id: number;
  name: string;
  stats: {
    stat: { name: string };
    base_stat: number;
  }[];
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      officialArtwork: {
        front_default: string;
      };
    };
  };
}
