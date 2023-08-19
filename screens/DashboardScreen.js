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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Voice Journal</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToVoiceNoteList}>
        <Text style={styles.buttonText}>View Voice Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToRecording}>
        <Text style={styles.buttonText}>Record a Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Title text color
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  button: {
    backgroundColor: '#3E9BF7', // Light blue button
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DashboardScreen;
