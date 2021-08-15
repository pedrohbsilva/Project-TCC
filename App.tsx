/* eslint-disable camelcase */
import React from 'react';
import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import Routes from './src/routes/index';
import AppProvider from './src/hooks';

const App = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar />
      <AppProvider>
        <Routes />
      </AppProvider>
      <FlashMessage position="top" style={{ zIndex: 1000 }} />
    </NavigationContainer>
  );
};

export default App;
