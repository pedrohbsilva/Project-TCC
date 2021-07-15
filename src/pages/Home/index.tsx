import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import MenuIcon from '../../components/Menu';
import { Container, TextButton, ListOptions } from './styles';

const Home = (): React.ReactElement => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuIcon />,
    });
  }, [navigation]);
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
              <TextButton>teste</TextButton>
            </Container>
          </ListOptions>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
