import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

function AuthForm({ headerText, errorMessage, onSubmit, submitButtonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
}

AuthForm.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 28,
    color: 'red',
  },
});

export default AuthForm;
