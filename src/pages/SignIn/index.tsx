import React, { useRef, useCallback, useState } from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { showMessage } from 'react-native-flash-message';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/logo.png';
import {
  Container,
  ContainerButton,
  ContainerColor,
  TextButton,
  ListOptions,
  ContainerImage,
} from './styles';
import { SignInCredentials } from '../../interfaces';

const SignIn = (): React.ReactElement => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const handleSignIn = useCallback(
    async (data: SignInCredentials) => {
      setIsLoading(true);
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
        setIsLoading(false);
        showMessage({
          message: 'Logado com sucesso!',
          type: 'success',
          duration: 3000,
        });
      } catch (error) {
        setIsLoading(false);
        showMessage({
          message: 'Falha ao logar',
          description: 'Email e/ou senha inválidos',
          type: 'danger',
          duration: 5000,
        });
      }
    },
    [signIn],
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ListOptions keyboardShouldPersistTaps="handled">
            <Container>
              <ContainerImage>
                <Image source={Logo} style={{ height: 300, width: 300 }} />
              </ContainerImage>
              <Form
                ref={formRef}
                onSubmit={handleSignIn}
                style={{ marginTop: 100 }}
              >
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
                <Input
                  autoCapitalize="none"
                  ref={passwordInputRef}
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />
                <ContainerColor>
                  <ContainerButton
                    onPress={() => formRef.current?.submitForm()}
                  >
                    {isLoading === false ? (
                      <TextButton>Entrar</TextButton>
                    ) : (
                      <TextButton>Carregando...</TextButton>
                    )}
                  </ContainerButton>
                </ContainerColor>
              </Form>
            </Container>
          </ListOptions>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
