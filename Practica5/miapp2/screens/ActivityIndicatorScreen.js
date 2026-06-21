/*Zona 1: Importaciones de componentes y archivos */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

/*Zona 2: Main - Hogar de los componentes */
export default function ActivityIndicatorScreen() {

  const [cargando, setCargando] = useState(false);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled ={true}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 24, flex: 1, justifyContent: 'space-around' }}>

          <Text style={{ fontSize: 36, marginBottom: 48 }}>Header</Text>

          <TextInput
            placeholder="Username" style={{ height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 }}/>

          {cargando && (<ActivityIndicator animating={true} size="large" color="green" style={{ marginVertical: 12 }} />)}

          <View style={{ backgroundColor: 'white', marginTop: 12 }}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>

        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}