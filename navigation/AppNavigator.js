import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VoiceNoteListScreen from '../screens/VoiceNoteListScreen';
import RecordingScreen from '../screens/RecordingScreen';
import PlayScreen from '../screens/PlayScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VoiceNoteList">
        <Stack.Screen name="VoiceNoteList" component={VoiceNoteListScreen} />
        <Stack.Screen name="Record" component={RecordingScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
