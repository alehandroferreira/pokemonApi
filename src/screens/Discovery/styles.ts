import styled from "styled-components/native";

import { FlatList } from "react-native";
import { PokemonDetailDTO } from "../../dtos/PokemonDetailDTO";

export const Container = styled.View`
  padding: 15px;
  margin-top: 5px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  font-size: 18;
  color: ${({ theme }) => theme.colors.title};
`;

export const Pokelist = styled(
  FlatList as new () => FlatList<PokemonDetailDTO>
).attrs({
  showsVerticalScrollIndicator: false,
})``;
