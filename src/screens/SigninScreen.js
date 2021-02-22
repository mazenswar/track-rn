import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

function SigninScreen() {
  const { state, signin, clearErrorMessages } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessages} />
      <AuthForm
        headerText="Sign In"
        submitButtonText="Log In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
