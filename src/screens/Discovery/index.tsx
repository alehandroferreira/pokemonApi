import React, { useState, useEffect } from "react";
import { PokemonDetailDTO } from "../../dtos/PokemonDetailDTO";
import api from "../../services/api";
import { ResponsePokemonToMapper } from "../../services/mapping/ResponsePokemonToMapper";

import { Container, Pokelist, Text } from "./styles";

interface Props {
  data: PokemonDetailDTO;
}

export function Discovery() {
  const [date, setDate] = useState<PokemonDetailDTO[]>([]);
  const [allsPokemons, setAllsPokemons] = useState();
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    async function getAllsPokemons() {
      try {
        const url = "pokemon?limit=20";
        const response = await api.get(url);
        setAllsPokemons(response.data);
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function getOnePokemon(id: number) {
      try {
        const url = `/pokemon/${id}`;
        const response = await api.get(url);
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    getAllsPokemons();

    // const poke = new ResponsePokemonToMapper().build(getAllsPokemons());

    // setDate(poke);
  }, []);

  return (
    <Pokelist
      // numColumns={0}
      data={date}
      keyExtractor={(item) => String(item.name)}
      renderItem={({ item }) => <ListItem data={item} />}
    />
  );
}

function ListItem({ data }: Props) {
  return (
    <Container>
      <Text>{data.image}</Text>
      <Text>{data.name}</Text>
    </Container>
  );
}
