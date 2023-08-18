// RecordingContext.js
import React, { createContext, useContext, useState } from 'react';

const RecordingContext = createContext();

export const useRecordingContext = () => useContext(RecordingContext);

export const RecordingProvider = ({ children }) => {
  const [recordings, setRecordings] = useState([]);

  const addRecording = (uri, duration) => {
    setRecordings((prevRecordings) => [
      ...prevRecordings,
      { uri, duration },
    ]);
  };

  const deleteRecording = (uriToDelete) => {
    setRecordings((prevRecordings) =>
      prevRecordings.filter((recording) => recording.uri !== uriToDelete)
    );
  };

  return (
    <RecordingContext.Provider value={{ recordings, addRecording, deleteRecording }}>
      {children}
    </RecordingContext.Provider>
  );
};