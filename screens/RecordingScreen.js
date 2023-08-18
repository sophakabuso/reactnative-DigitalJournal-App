import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRecordingContext } from '../context/RecordingContext';

const RecordingScreen = () => {
  const { addRecording } = useRecordingContext();
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    // Simulate starting recording (replace with actual recording logic)
    console.log('Recording started');
    setIsRecording(true);
  };

  const stopRecording = async () => {
    // Simulate stopping recording (replace with actual recording logic)
    console.log('Recording stopped');
    setIsRecording(false);

    // Simulate recorded audio data (replace with actual data)
    const uri = 'path_to_recorded_audio_file';
    const duration = 5000; // Example duration in milliseconds
    addRecording(uri, duration);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startRecording} style={styles.button}>
        {({ pressed }) => (
          <Text style={[styles.buttonText, pressed && styles.buttonTextPressed]}>
            Start Recording
          </Text>
        )}
      </Pressable>
      {isRecording && (
        <Pressable onPress={stopRecording} style={[styles.button, styles.stopButton]}>
          {({ pressed }) => (
            <Text
              style={[
                styles.buttonText,
                styles.stopButtonText,
                pressed && styles.buttonTextPressed,
                { opacity: pressed ? 0.6 : 1 },
              ]}
            >
              Stop Recording
            </Text>
          )}
        </Pressable>
      )}
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
