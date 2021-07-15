import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  mask?: 'cep' | 'phone' | 'currency' | 'date' | 'cpf';
  inputMaskChange?: any;
}
export interface InputValueReference {
  value: string;
}
export interface InputRef {
  focus(): void;
}

export interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
export interface AuthState {
  token: string;
  user: User;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AppProviderProps {
  children: React.ReactNode;
}
