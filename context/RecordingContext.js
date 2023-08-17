// RecordingContext.js
import React, { createContext, useContext, useState } from 'react';

const RecordingContext = createContext();

export const useRecordingContext = () => useContext(RecordingContext);

export const RecordingProvider = ({ children }) => {
  const [recordings, setRecordings] = useState([]);

  const addRecording = (uri, metadata) => {
    setRecordings((prevRecordings) => [
      ...prevRecordings,
      { uri, ...metadata },
    ]);
  };

  return (
    <RecordingContext.Provider value={{ recordings, addRecording }}>
      {children}
    </RecordingContext.Provider>
  );
};
