import styled from 'styled-components/native';
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

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  margin-bottom: -180px;
`;
