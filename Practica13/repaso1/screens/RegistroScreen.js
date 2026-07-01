import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Platform,
} from "react-native";

if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje, boton) => {
    const list = Array.isArray(mensaje) ? mensaje : boton;
    if (list) {
      if (window.confirm(titular)) list.find((b) => b.onPress)?.onPress();
    } else {
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}

export default function RegistroScreen() {
  const [nombre, setNombre] = useState();
  const [carrera, setCarrera] = useState();
  const [cuatrimestre, setCuatrimestre] = useState();
  
  const registro = () => {
    if (!nombre || !carrera || !cuatrimestre) {
      Alert.alert("Faltan datos", "Completa todo los campos");
      return;
    }

    if (!cuatrimestre.match(/^[0-9+ ]+$/)) {
      Alert.alert("Dato invalido", "El Cuatrimestre debe contener solo numeros");
      setNumero("");
      return;
    }

    Alert.alert(`Registrar ${nombre}`, [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Si",
        onPress: () => {
          Alert.alert("Exito", 
          "Usuario registrado con exito");
        },
      },
    ]
  );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <Text style={styles.Titulo}>Formulario de registro de usuario</Text>
        {/* nombre del usuario */}
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={nombre}
          onChangeText={(texto) => setNombre(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nnombre de tui"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={(texto) => setCorreo(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese tu contraseña minimo 6 caracteres"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={contraseña}
          onChangeText={(texto) => setContraseña(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu Cuatrimestre "
          placeholderTextColor="#999"
          keyboardType="number-pad"
          maxLength={12}
          value={numero}
          onChangeText={(texto) => setNumero(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobre ti (opcional)"
          placeholderTextColor="#999"
          multiline={true}
          maxLength={20}
          value={bio}
          onChangeText={(texto) => setBio(texto)}
        />

        <Button title="Registrar" onPress={registro} color="#00ff00" />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "z#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 24,
    gap: 12,
  },
  Titulo: {
    padding: 30,
    fontSize: 20,
    alignContent: "stretch",
  },
  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },
});