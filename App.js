import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {
  MainContainer,
  Input,
  ResultText,
  Title,
  Label,
  Output,
  SubmitButton,
  SubmitButtonText,
} from './styles';

function VentApp() {
  const [mc, setMc] = useState('');
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
    setPlato(plato);
  };

  const handlePeep = (peep) => {
    setPeep(peep);
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
    setPico(pico);
  };

  const handleFlux = (flux) => {
    setFlux(flux);
  };

  const calculateErs = () => {
    if (volume != null && plato != null && peep != null) {
      let ers = volume / (plato - peep);
      setErs(ers);
    }
  };

  const calculateRaw = () => {
    if (pico != null && plato != null && flux != null) {
      let raw = (pico - plato) / flux;
      setRaw(raw);
    }
  };

  const calculateMc = () => {
    let mc =
      0.098 *
      fr *
      (volume * volume * (ers / 2 + fr * (((1 + ie) / 60) * ie) * raw) +
        volume * peep);
    setMc(mc);
  };

  return (
    <MainContainer>
      <Title>Lenon Mechanical Power Calculator</Title>

      <Label>FR</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Frequência Respiratória'
        autoCapitalize='none'
        onChangeText={handleFr}
      />

      <Label>Volume Corrente(L)</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Volume em litros'
        autoCapitalize='none'
        onChangeText={handleVolume}
      />

      <Label>Plato</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Plato'
        autoCapitalize='none'
        onChangeText={handlePlato}
      />

      <Label>PEEP</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='PEEP'
        autoCapitalize='none'
        onChangeText={handlePeep}
      />

      <Label>ERS</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Elastância/Complacência'
        autoCapitalize='none'
        disabled
        value={ers.toString()}
      />

      <Label>I:E</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Relação Inspiratória/Respiratória'
        autoCapitalize='none'
        onChangeText={handleIe}
      />

      <Label>Pico</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Pico'
        autoCapitalize='none'
        onChangeText={handlePico}
      />

      <Label>Fluxo</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Fluxo'
        autoCapitalize='none'
        onChangeText={handleFlux}
      />

      <Label>Raw</Label>
      <Input
        keyboardType='numeric'
        underlineColorAndroid='transparent'
        placeholder='Resistência'
        autoCapitalize='none'
        disabled
        value={raw.toString()}
      />

      <SubmitButton onPress={() => calculateMc()}>
        <SubmitButtonText>Calculate Mechanical Power</SubmitButtonText>
      </SubmitButton>
      <Output>{mc}</Output>
      <ResultText>{}</ResultText>
    </MainContainer>
  );
}

export default VentApp;
