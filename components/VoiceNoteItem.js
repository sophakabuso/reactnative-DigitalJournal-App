import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VoiceNoteItem = ({ note, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.noteInfo}>
        <Text style={styles.noteDuration}>{note.duration} ms</Text>
        <Text style={styles.noteUri}>{note.uri}</Text>
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
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#333', // Dark separator color
    backgroundColor: '#292929', // Dark gray background
    borderRadius: 10,
    marginBottom: 15,
  },
  noteInfo: {
    flex: 1,
  },
  noteDuration: {
    color: '#FFD700', // Gold color for duration
    fontSize: 16,
    marginBottom: 5,
  },
  noteUri: {
    color: 'white',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    alignItems: 'center', // Center buttons vertically
  },
  playButton: {
    backgroundColor: '#3E9BF7', // Light blue play button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10, // Add margin between buttons
  },
  playButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#FF4500', // Orange-red delete button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});


export default VoiceNoteItem