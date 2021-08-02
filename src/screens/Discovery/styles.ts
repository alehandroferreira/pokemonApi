import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 10px 10px 10px;
  margin: 15px 15px 15px 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16;
  color: ${({ theme }) => theme.colors.title};
  text-transform: capitalize;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;
