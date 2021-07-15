/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/routes/index';
import AppProvider from './src/hooks';

const App = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar />
      <AppProvider>
        <Routes />
      </AppProvider>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
