import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VoiceNoteItem = ({ note, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.noteInfo}>
        <Text>{note.duration} ms</Text>
        <Text>{note.uri}</Text>
      </View>
      <TouchableOpacity style={styles.playButton} onPress={onPress}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  noteInfo: {
    flex: 1,
  },
  playButton: {
    backgroundColor: '#3E9BF7',
    padding: 10,
    borderRadius: 8,
  },
  playButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VoiceNoteItem;
