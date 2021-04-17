import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 8%;
  padding-bottom:5%;
  padding-left: 4%;
  padding-right:4%;
  background-color: #191d36
`;
export const Tittle = styled.Text`
  font-size:36px;
  font-weight: bold;
  margin-bottom:10px;
  color: #ddd
`;
export const InfoText = styled.Text`
  color: #ddd;
  font-size: 16px;
  align-self: center;
`;
export const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
export const ButtonHome = styled.TouchableOpacity`
  width: 60%;
  height: 8%;
  align-items: center;
  justify-content: center;
  background-color: #fdfdfd;
  border-radius: 8
  `;
