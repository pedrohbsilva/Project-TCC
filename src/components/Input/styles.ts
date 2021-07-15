import styled, { css } from 'styled-components/native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { Platform } from 'react-native';
import { ContainerProps } from '../../interfaces';

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: transparent;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #a0a0a0;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;

  ${props =>
    props.isErrored &&
    css`
      border-color: #da5757;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #009eba;
    `}
`;
export const TextInput = styled.TextInput`
  width: 50%;
  flex: 1;
  color: #5a5a5a;
  font-size: 16px;
  font-family: 'Poppins_300Light';
  ${Platform.OS === 'web'
    ? css`
        outline-color: none;
        outline-offset: 0;
        outline-style: none;
        outline-width: 0;
      `
    : undefined}
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
