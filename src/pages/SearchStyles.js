import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #191d36
`;
export const InputSearch = styled.TextInput`
  align-self: stretch;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius:4px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const ButtonLocation = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    padding-left: 8px;
    padding-right: 8px;
    margin-Bottom: 10px;
`;
export const TextLocalization = styled.Text`
    font-size: ${props => props.theme.fontLocation};
    color: #999;
    margin-left: 8px;
    margin-right: 8px;
`;
export const ModalMap = styled.View`
    flex:1;
    margin: 20px;
    background-color: white;
    box-shadow: 10px 5px 5px black;
`;