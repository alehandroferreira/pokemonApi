import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 15px;
  margin-top: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18;
  color: ${({ theme }) => theme.colors.title};
`;

// export const Pokelist = styled(
//   FlatList as new () => FlatList<PokemonsDTO>
// ).attrs({
//   showsVerticalScrollIndicator: false,
// })``;
