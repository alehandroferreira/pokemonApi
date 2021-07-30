import { OnePokemonDTO } from "../../dtos/OnePokemonDTO";
import { PokemonDetailDTO } from "../../dtos/PokemonDetailDTO";
import { PokemonsDTO } from "../../dtos/PokemonsDTO";

import Utils from "../../utils/Utils";

export class ResponsePokemonToMapper {
  build(
    allsPokemons: PokemonsDTO,
    onePokemon: OnePokemonDTO
  ): PokemonDetailDTO {
    const allsPoke = allsPokemons.results[0];
    const onePoke = onePokemon;

    const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${Utils.toCoverId(
      allsPoke.url
    )}.png`;

    return {
      id: onePoke.id,
      name: onePoke.name,
      image: pokeImage,
      weight: onePoke.weight,
      height: onePoke.height,
      abilities: onePoke.abilities.map((abilities) => ({
        ability: {
          name: abilities.ability.name,
        },
      })),
      stats: onePoke.stats.map((stats) => ({
        base_stat: stats.base_stat,
        name: stats.stat.name,
      })),
    };
  }
}
