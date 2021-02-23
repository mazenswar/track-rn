import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
