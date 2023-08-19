import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecordingContext } from '../context/RecordingContext';
import VoiceNoteItem from '../components/VoiceNoteItem';

const VoiceNoteListScreen = () => {
  const navigation = useNavigation();
  const { recordings, deleteRecording } = useRecordingContext();

  const handleNavigateToRecording = () => {
    navigation.navigate('Recording');
  };

  const handleNavigateToPlay = (note) => {
    navigation.navigate('Play', { note });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Note List</Text>
      <Pressable style={styles.button} onPress={handleNavigateToRecording}>
        <Text style={styles.buttonText}>Record a Voice Note</Text>
      </Pressable>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <VoiceNoteItem
            note={item}
            onPress={() => handleNavigateToPlay(item)}
            onDelete={() => deleteRecording(item.uri)}
          />
        )}
      />
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

export default VoiceNoteListScreen;
