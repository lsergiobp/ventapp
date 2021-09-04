import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
function VentApp() {
  const [fr, setFr] = useState(0);
  const [volume, setVolume] = useState(0);
  const [ers, setErs] = useState(0);
  const [ie, setIe] = useState(0);
  const [raw, setRaw] = useState(0);
  const [plato, setPlato] = useState(0);
  const [peep, setPeep] = useState(0);
  const [pico, setPico] = useState(0);
  const [flux, setFlux] = useState(0);

  const handleFr = (fr) => {
    setFr(fr);
  };

  const handleVolume = (fr) => {
    setVolume(fr);
  };

  const handlePlato = (plato) => {
    setErs(plato);
  };

  const handlePeep = (peep) => {
    setErs(peep);
  };

  const handleErs = (fr) => {
    setErs(fr);
  };

  const handleIe = (fr) => {
    setIe(fr);
  };

  const handleRaw = (fr) => {
    setRaw(fr);
  };

  const handlePico = (pico) => {
    setRaw(pico);
  };

  const handleFlux = (flux) => {
    setRaw(flux);
  };

  const calculateErs = () => {
    if (volume != null && plato != null && peep != null) {
      let ers = volume / (plato - peep);
      setErs(ers);
    }
  };

  const calculateRaw = () => {
    if (pico != null && plato != null && flux != null) {
      let ers = (pico - plato) / flux;
      setErs(raw);
    }
  };

  const calculateVent = () => {
    //calculation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lenon Mechanical Power Calculator</Text>

      <Text style={styles.label}>FR</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Frequência Respiratória'
        autoCapitalize='none'
        onChangeText={handleFr}
      />

      <Text style={styles.label}>Volume Corrente(L)</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Volume em litros'
        autoCapitalize='none'
        onChangeText={handleVolume}
      />

      <Text style={styles.label}>Plato</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Plato'
        autoCapitalize='none'
        onChangeText={handlePlato}
      />

      <Text style={styles.label}>PEEP</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='PEEP'
        autoCapitalize='none'
        onChangeText={handlePeep}
      />

      <Text style={styles.label}>ERS</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Elastância/Complacência'
        autoCapitalize='none'
        disabled
        value={ers}
      />

      <Text style={styles.label}>I:E</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Relação Inspiratória/Respiratória'
        autoCapitalize='none'
        onChangeText={handleIe}
      />

      <Text style={styles.label}>Pico</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Pico'
        autoCapitalize='none'
        onChangeText={handlePico}
      />

      <Text style={styles.label}>Fluxo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Fluxo'
        autoCapitalize='none'
        onChangeText={handleFlux}
      />

      <Text style={styles.label}>Raw</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Resistência'
        autoCapitalize='none'
        disabled
        value={raw}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => calculateErs()}
      >
        <Text style={styles.submitButtonText}>Calculate Mechanical Power</Text>
      </TouchableOpacity>
      <Text style={styles.output}>{}</Text>
      <Text style={styles.resultText}>{}</Text>
    </View>
  );
}

export default VentApp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  output: {
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'blue',
  },
  label: {
    marginLeft: 15,
  },
});
