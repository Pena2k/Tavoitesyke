import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [age, setAge] = useState ('')
const [lowerHeartRate, setLowerHeartRate] = useState ('0')
const [upperHeartRate, setUpperHeartRate] = useState ('0')

const calculate = () => {
  const ageNumber = parseInt(age);
  if (isNaN(ageNumber)) {
    alert('Anna oikea numero');
    return;
  }
  const lower = (220 - ageNumber) * 0.65;
  const upper = (220 - ageNumber) * 0.85;
  setLowerHeartRate(lower.toFixed(1));
  setUpperHeartRate(upper.toFixed(1));
}
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      placeholder='Insert age'
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      style={styles.input}
      />
      <Button title='Calculate' onPress={calculate} />
      <View style={styles.row}>
        <Text style={styles.field}>{lowerHeartRate}</Text>
        <Text style={styles.separator}> - </Text>
        <Text style={styles.field}>{upperHeartRate}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  }, 
  field: {
    marginTop: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, 
  },
});