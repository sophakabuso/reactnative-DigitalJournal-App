import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const PlayScreen = ({ route }) => {
  const { note } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: note.uri });
      setSound(sound);
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const togglePlayback = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Text>Playing: {note.uri}</Text>
      <View style={styles.controls}>
        <Pressable style={styles.button} onPress={togglePlayback}>
          <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </Pressable>
      </View>
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
  controls: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3E9BF7',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PlayScreen;
