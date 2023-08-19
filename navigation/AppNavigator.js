import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import VoiceNoteListScreen from '../screens/VoiceNoteListScreen';
import RecordingScreen from '../screens/RecordingScreen';
import PlayScreen from '../screens/PlayScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Voice Journal App' }} />
      <Stack.Screen name="VoiceNoteList" component={VoiceNoteListScreen} options={{ title: 'Voice Notes List' }} />
      <Stack.Screen name="Recording" component={RecordingScreen} options={{ title: 'Record Voice Note' }} />
      <Stack.Screen name="Play" component={PlayScreen} options={{ title: 'Play Voice Note' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

