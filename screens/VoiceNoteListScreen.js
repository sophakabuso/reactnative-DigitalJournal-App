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

  const renderVoiceNoteItem = ({ item }) => (
    <VoiceNoteItem
      note={item}
      onPress={() => handleNavigateToPlay(item)}
      onDelete={() => deleteRecording(item.uri)}
      onMoreInfo={() => handleNavigateToMoreInfo(item)}
    />
  );

  const handleNavigateToMoreInfo = (note) => {
    navigation.navigate('MoreInfo', { note });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Note List</Text>
      <Pressable style={styles.recordButton} onPress={handleNavigateToRecording}>
        <Text style={styles.recordButtonText}>Record a Voice Note</Text>
      </Pressable>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderVoiceNoteItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Title text color
  },
  recordButton: {
    backgroundColor: '#3E9BF7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  recordButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  highlightText: {
    color: '#3E9BF7', // Light blue color for highlights
    fontWeight: 'bold',
  },
});

export default VoiceNoteListScreen;
