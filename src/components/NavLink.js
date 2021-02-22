import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function NavLink({ text, routeName, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginLeft: 15,
  },
});

export default withNavigation(NavLink);
