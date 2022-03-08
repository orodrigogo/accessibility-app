import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`  
  width: 100%;
  background-color: #FFF;
  flex-direction: row;
  align-items: center;
  padding: 18px 28px;
  border-radius: 12px;
  margin-bottom: 14px;
`;

export const Team = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 7px;
`;

export const Time = styled.View`
  align-items: center;
  margin: 0 10px;
`;

export const Hour = styled.Text`
  font-weight: bold;
  color: #F67E55;
  font-size: 17px;
`;

export const Day = styled.Text`
  color: #999;
  font-size: 12px;
`;

