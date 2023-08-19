import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const navigateToVoiceNoteList = () => {
    navigation.navigate('VoiceNoteList');
  };

  const navigateToRecording = () => {
    navigation.navigate('Recording');
  };

  const navigateToPlay = () => {
    navigation.navigate('Play', { note: { title: 'Sample Note' } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Journal App</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToVoiceNoteList}>
        <Text style={styles.buttonText}>Voice Note List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToRecording}>
        <Text style={styles.buttonText}>Record Voice Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3E9BF7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
