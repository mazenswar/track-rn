import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackerContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignupScreen({ navigation }) {
  const { state, signup, clearErrorMessages } = useContext(TrackerContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessages} />
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Create Account"
      />
      <NavLink text="Already a member? Log In" routeName="Signin" />
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
});

export default SignupScreen;
