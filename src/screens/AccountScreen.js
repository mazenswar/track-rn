import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Text, Button } from 'react-native-elements';

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={signout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
