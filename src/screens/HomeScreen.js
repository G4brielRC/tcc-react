import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import InterviewCard from '../components/InterviewCard';
import ProgressBar from '../components/ProgressBar';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.greeting}>Olá, Nome do Usuário! 👋</Text>
      <TextInput style={styles.search} placeholder="Buscar entrevistas..." />
      <TouchableOpacity style={styles.newInterview}>
        <Text 
        style={styles.newInterviewText}>Começar nova entrevista</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Minhas Entrevistas</Text>
      <InterviewCard title="Entrevista 1" status="Feedback disponível" onPress={() => navigation.navigate('Feedback')} />
      <InterviewCard title="Entrevista 2" status="Em análise pela IA" />
      <Text style={styles.title}>Painel de Progresso</Text>
      <ProgressBar label="Comunicação" progress={0.85} />
      <ProgressBar label="Confiança" progress={0.78} />
      <ProgressBar label="Clareza" progress={0.92} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  logo: { width: 120, height: 40, resizeMode: 'contain', margnBottom: 16 },
  greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  search: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 16 },
  newInterview: { backgroundColor: '#333', padding: 12, borderRadius: 8, marginBottom: 16 },
  newInterviewText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
});
