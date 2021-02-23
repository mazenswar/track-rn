import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function TrackCreateScreen() {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
