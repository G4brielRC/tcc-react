import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ label, progress }) {
  return (
    <View style={{ marginVertical: 8 }}>
      <Text>{label}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text>{Math.round(progress * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barBackground: { height: 8, backgroundColor: '#ccc', borderRadius: 4, marginTop: 4 },
  barFill: { height: 8, backgroundColor: '#333', borderRadius: 4 },
});


