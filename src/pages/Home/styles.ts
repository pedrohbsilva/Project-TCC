import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ListOptions = styled.ScrollView.attrs({
  vertical: true,
})`
  flex: 1;
`;

export const TextHome = styled.Text`
  color: #61cf71;
  font-size: 14px;
  font-family: 'Poppins_600SemiBold';
  text-align: left;
`;

export const ViewHome = styled.View`
  width: 100%;
  padding: 0 20px 0 20px;
`;
