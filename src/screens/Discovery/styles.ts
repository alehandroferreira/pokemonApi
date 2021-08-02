import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  padding: 5px;
  margin: 8px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18;
  color: ${({ theme }) => theme.colors.title};
  text-transform: capitalize;
`;

export const Text = styled.Text`
  font-size: 16;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const Stat = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 135;
  height: 135;
`;
