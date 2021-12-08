import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;  
  background-color: #FFF;
  padding-left: 22px;
  border-radius: 10px;
  border: 1px solid #FF2C84;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FF2C84;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
`;