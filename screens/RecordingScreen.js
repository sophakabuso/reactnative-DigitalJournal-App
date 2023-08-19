import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRecordingContext } from '../context/RecordingContext';
import { Audio, RecordingOptionsPreset } from 'expo-av';

const RecordingScreen = () => {
  const { addRecording } = useRecordingContext();
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  const startRecording = async () => {
    try {
      const recordingObject = new Audio.Recording();
      await recordingObject.prepareToRecordAsync(RecordingOptionsPreset.HighQuality);
      await recordingObject.startAsync();
      setRecording(recordingObject);
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      try {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        const { durationMillis } = await recording.getStatusAsync();
        addRecording(uri, durationMillis);
        setRecording(null);
        setIsRecording(false);
      } catch (error) {
        console.error('Failed to stop recording:', error);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={isRecording ? stopRecording : startRecording} style={isRecording ? styles.stopButton : styles.button}>
        {({ pressed }) => (
          <Text
            style={[
              styles.buttonText,
              isRecording && styles.stopButtonText,
              pressed && styles.buttonTextPressed,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  button: {
    backgroundColor: '#3E9BF7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  stopButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stopButtonText: {
    color: '#1E1E1E',
  },
  buttonTextPressed: {
    opacity: 0.6,
  },
});

export default RecordingScreen;
