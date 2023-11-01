import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainStack from './src/routes';
import theme from './src/styles/themes';
import ToastConfig from './src/components/ToastConfig';
import { StatusBar } from 'expo-status-bar';
import { persistor, store } from './src/redux/store';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Toast />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
              <StatusBar backgroundColor="#1A1A1A"  />
              <MainStack />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
