import styled from 'styled-components/native';

type Props = {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({ isActive }) => isActive ? '#FF2983' : '#939393'};
  height: 40px;
  border-radius: 17px;
  padding: 0 17px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #FFF;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;