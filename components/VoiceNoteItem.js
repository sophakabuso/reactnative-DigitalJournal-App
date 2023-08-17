import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VoiceNoteItem = ({ note, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{note.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default VoiceNoteItem;
