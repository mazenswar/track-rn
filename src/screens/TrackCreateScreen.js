import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';

function TrackCreateScreen({ isFocused }) {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [error] = useLocation(isFocused, callback);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
}

export default withNavigationFocus(TrackCreateScreen);

// const styles = StyleSheet.create({});
