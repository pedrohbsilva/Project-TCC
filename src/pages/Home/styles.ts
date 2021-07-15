import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
export const ListOptions = styled.ScrollView.attrs({
  vertical: true,
})`
  flex: 1;
`;
export const ContainerColor = styled(LinearGradient).attrs({
  colors: ['#61cf7e', '#ebe694'],
  start: [1, 0],
  end: [0, 1],
})``;
export const ContainerButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins_600SemiBold';
`;
export const CreateAccountButton = styled.TouchableOpacity`
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #c4c4c4;
  font-size: 18px;
  font-family: 'Poppins_300Light';
  margin-left: 16px;
  text-decoration-line: underline;
`;

export const TextSignIn = styled.Text`
  color: #ca1ba7;
  font-size: 26px;
  font-family: 'Poppins_600SemiBold';
`;
