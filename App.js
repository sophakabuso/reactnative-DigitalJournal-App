import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecordingProvider } from './context/RecordingContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RecordingProvider>
        <AppNavigator />
      </RecordingProvider>
    </NavigationContainer>
  );
};

export default App;
