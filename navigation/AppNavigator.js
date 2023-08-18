import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard'; // Update import path
import VoiceNoteListScreen from '../screens/VoiceNoteListScreen'; // Update import path
import RecordingScreen from '../screens/RecordingScreen'; // Update import path
import PlayScreen from '../screens/PlayScreen'; // Update import path

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="VoiceNoteList" component={VoiceNoteListScreen} />
      <Stack.Screen name="Record" component={RecordingScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
