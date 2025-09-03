import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InterviewCard({ title, status, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.status}>
        <Text>{status}</Text>
        {status.includes('disponível') ? <Ionicons name="checkmark" size={20} /> : <Ionicons name="hourglass" size={20} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 8 },
  title: { fontWeight: 'bold', marginBottom: 4 },
  status: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});

