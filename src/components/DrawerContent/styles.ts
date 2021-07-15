import styled from 'styled-components/native';
import { Title, Caption, Paragraph } from 'react-native-paper';

export const TitlePaper = styled(Title)`
  font-size: 20px;
  margin-top: 3px;
  font-family: 'Poppins_600SemiBold';
`;

export const Row = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;
export const ParagraphPaper = styled(Paragraph)`
  font-weight: bold;
  margin-right: 3px;
  font-size: 14px;
  line-height: 14px;
  font-family: 'Poppins_300Light';
`;
export const CaptionPaper = styled(Caption)`
  font-size: 14px;
  line-height: 18px;
  font-family: 'Poppins_300Light';
`;
