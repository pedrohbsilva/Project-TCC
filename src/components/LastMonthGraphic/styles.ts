import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const LastMonthGraphicContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

type ColumnProps = {
  isInitial: boolean;
};

export const Column = styled(LinearGradient).attrs({
  colors: ['#61cf7e', '#ebe694'],
  start: [2, 0],
  end: [0, 4],
})<ColumnProps>`
  margin-top: -100px;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 20px 0 20px 0;
  border-radius: 8px;
`;

export const TextTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Poppins_600SemiBold';
`;

export const TextSub = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-family: 'Poppins_300Light';
`;
