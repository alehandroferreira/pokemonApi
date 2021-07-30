import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { PokemonDetailDTO } from "../../dtos/PokemonDetailDTO";
import { PokemonsDTO } from "../../dtos/PokemonsDTO";
import api from "../../services/api";
import { ResponsePokemonToMapper } from "../../services/mapping/ResponsePokemonToMapper";

import { Container, Text } from "./styles";

interface Props {
  data: { name: string; url: string };
}

export function Discovery() {
  const [date, setDate] = useState<PokemonDetailDTO[]>([]);
  const [allsPokemons, setAllsPokemons] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  async function getAllsPokemons() {
    try {
      const url = `pokemon?limit=${itemsPerPage}&offset=${offset}`;
      const response = await api.get(url);
      setAllsPokemons([...allsPokemons, ...response.data.results]);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllsPokemons();
  }, [offset]);

  useEffect(() => {
    getAllsPokemons();
  }, []);

  return (
    <>
      {/* <Text>{allsPokemons?.length}</Text> */}
      <FlatList
        numColumns={1}
        data={allsPokemons}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => <ListItem data={item} />}
        onEndReached={() => {
          setOffset(offset + itemsPerPage);
        }}
      />
    </>
  );
}

function ListItem({ data }: Props) {
  const [colapsed, setColapsed] = useState(true);
  const [details, setDetails] = useState();

  async function getOnePokemon() {
    try {
      const url = `/pokemon/${data.name}`;
      const response = await api.get(url);
      setDetails(response.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (!colapsed && !details) {
      getOnePokemon();
    }
  }, [colapsed]);

  return (
    <Container
      onPress={() => {
        setColapsed(!colapsed);
      }}
    >
      <Text>{data.name}</Text>
      <Text>{data.url}</Text>
      <>{!colapsed && <Text>{JSON.stringify(details)}</Text>}</>
    </Container>
  );
}
