import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as TrackerContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

function SignupScreen({ navigation }) {
  const { state, signup } = useContext(TrackerContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Create Account"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Already a member? click here to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
    justifyContent: 'center',
  },
  errorMessage: {
    fontSize: 28,
    color: 'red',
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;
