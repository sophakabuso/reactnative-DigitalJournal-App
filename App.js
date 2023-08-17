import React from 'react';
import { RecordingProvider } from './context/RecordingContext'; // Update import path
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <RecordingProvider>
      <AppNavigator />
    </RecordingProvider>
  );
};

export default App;
