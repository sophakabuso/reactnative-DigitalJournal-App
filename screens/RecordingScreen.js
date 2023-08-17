import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRecordingContext } from '../context/RecordingContext';


const RecordingScreen = () => {
  const { addRecording } = useRecordingContext();
  const [recording, setRecording] = useState(null);

  const startRecording = async () => {
    // Your recording logic here
  };

  const stopRecording = async () => {
    // Your stop recording logic here
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
      {recording && (
        <Pressable onPress={stopRecording} style={[styles.button, styles.stopButton]}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, styles.stopButtonText, pressed && styles.buttonTextPressed]}>
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
