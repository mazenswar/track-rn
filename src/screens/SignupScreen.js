import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as TrackerContext } from '../context/AuthContext';

function SignupScreen({ navigation }) {
  const { state, signup } = useContext(TrackerContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.link}>
            Already a member? click here to Sign In
          </Text>
        </TouchableOpacity>
      </Spacer>
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
    justifyContent: 'space-evenly',
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
