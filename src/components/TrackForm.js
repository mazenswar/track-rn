import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

export default function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter Name"
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer>
        {!recording && locations.length ? (
          <Button onPress={saveTrack} title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
}
