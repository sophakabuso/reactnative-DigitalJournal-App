import React from 'react';
import { View, Text } from 'react-native';

const PlayScreen = ({ route }) => {
  const { note } = route.params;

  return (
    <View>
      <Text>{note.uri}</Text>
    </View>
  );
};

export default PlayScreen;
