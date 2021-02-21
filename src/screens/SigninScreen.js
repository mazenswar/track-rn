import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

export default function SigninScreen({ navigation }) {
  const { state, signin } = React.useContext(AuthContext);
  return (
    <View>
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign Up"
        submitButtonText="Log In"
        onSubmit={signin}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
