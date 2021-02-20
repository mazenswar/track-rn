import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="Go to Sign in"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to mainFLow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
}

const styles = StyleSheet.create({});
