import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { OnePokemonDTO } from "../../dtos/OnePokemonDTO";
import { PokemonDetailDTO } from "../../dtos/PokemonDetailDTO";
import { PokemonsDTO } from "../../dtos/PokemonsDTO";
import api from "../../services/api";
import Utils from "../../utils/Utils";

import { Container, Text, Image, Card, Stat, Title } from "./styles";

interface Props {
  data: PokemonsDTO;
}

export function Discovery() {
  const [allsPokemons, setAllsPokemons] = useState<Props[]>([]);
  const [offset, setOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(22);

  async function getAllsPokemons() {
    try {
      const url = `pokemon?limit=${itemsPerPage}&offset=${offset}`;
      const response = await api.get(url);
      setAllsPokemons([...allsPokemons, ...response.data.results]);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllsPokemons();
  }, [offset]);

  useEffect(() => {
    getAllsPokemons();
  }, []);

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={allsPokemons}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => <ListItem data={item} />}
        onEndReached={() => {
          setOffset(offset + itemsPerPage);
        }}
      />
    </Container>
  );
}

function ListItem({ data }: Props) {
  const [colapsed, setColapsed] = useState(true);
  const [details, setDetails] = useState<OnePokemonDTO>();

  async function getOnePokemon(): Promise<OnePokemonDTO> {
    try {
      const url = `/pokemon/${data.name}`;
      const response = await api.get(url);
      setDetails(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  function pokemomDetails(detail?: OnePokemonDTO) {
    const resp = {
      id: detail?.id,
      name: detail?.name,
      weight: detail?.weight,
      height: detail?.height,
      abilities: {
        ability: {
          name: detail?.abilities.map((item) => item.ability.name),
        },
      },

      stats: detail?.stats.map((stats) => {
        return {
          name: stats.stat.name,
          base_stat: stats.base_stat,
        };
      }),
    };

    return (
      <>
        <Title>
          Abilities: <Text>{resp.abilities.ability.name}</Text>
        </Title>

        {resp.stats?.map((item) => (
          <Stat>
            <Title>{item.name}:</Title>
            <Text>{item.base_stat}</Text>
          </Stat>
        ))}

        <Stat>
          <Title>Weight:</Title>
          <Text>{resp.weight}</Text>
        </Stat>
        <Stat>
          <Title>Height:</Title>
          <Text>{resp.height}</Text>
        </Stat>
      </>
    );
  }

  useEffect(() => {
    if (!colapsed && !details) {
      getOnePokemon();
    }
  }, [colapsed]);

  return (
    <Card
      onPress={() => {
        setColapsed(!colapsed);
      }}
    >
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${new Utils().toCoverId(
            data.url
          )}.png`,
        }}
      />
      <Title>{data.name}</Title>
      <>{!colapsed && pokemomDetails(details)}</>
    </Card>
  );
}
