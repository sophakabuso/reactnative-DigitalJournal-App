import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRecordingContext } from '../context/RecordingContext';

const VoiceNoteListScreen = () => {
  const { recordings } = useRecordingContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.uri}</Text>
            <Text>{item.duration} ms</Text>
          </View>
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
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default VoiceNoteListScreen;
