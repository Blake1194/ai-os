import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import shellState from './src/shellState';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Atlas Mobile Shell</Text>
        <Text style={styles.subtitle}>Controlled expansion scaffold</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current baseline</Text>
          <Text style={styles.cardText}>{shellState.baseline}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Opened lanes</Text>
          {shellState.openLanes.map((lane) => (
            <Text key={lane} style={styles.cardText}>• {lane}</Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Next unlock</Text>
          <Text style={styles.cardText}>{shellState.nextUnlock}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0b1020' },
  container: { padding: 24, gap: 16 },
  title: { color: '#ffffff', fontSize: 30, fontWeight: '700' },
  subtitle: { color: '#aab4d4', fontSize: 16 },
  card: {
    backgroundColor: '#161d33',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a365f'
  },
  cardTitle: { color: '#ffffff', fontSize: 18, fontWeight: '600', marginBottom: 8 },
  cardText: { color: '#d8def2', fontSize: 14, lineHeight: 20 }
});
