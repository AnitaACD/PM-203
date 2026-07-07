import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";

export default function RegistroScreen() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setCuatri] = useState("");

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registro = () => {
    if (!nombre || !carrera || !cuatri) {
      Alert.alert(
        "Faltan datos",
        "Completa todos los campos"
      );
      return;
    }

    if (!semestre.match(/^[0-9]+$/)) {
      Alert.alert(
        "Semestre inválido",
        "El cuatrimestre debe contener solo números"
      );

      setCuatri("");

      return;
    }

    Alert.alert(
      "Registro enviado",
      "Nombre: " +
        nombre +
        "\nCarrera: " +
        carrera +
        "\nCuatri: " +
        semestre +
        "\n\nTaller: " +
        (taller ? "Sí" : "No") +
        "\nConstancia: " +
        (constancia ? "Sí" : "No") +
        "\nDeportes: " +
        (deportes ? "Sí" : "No")
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Cuatri"
          value={semestre}
          onChangeText={setCuatri}
          keyboardType="numeric"
        />

        <Text style={styles.subtitulo}>
          Opciones
        </Text>

        <View style={styles.fila}>
          <Text style={styles.textoOpcion}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </View>

        <View style={styles.fila}>
          <Text style={styles.textoOpcion}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </View>

        <View style={styles.fila}>
          <Text style={styles.textoOpcion}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />
        </View>

        <Pressable
          style={styles.boton}
          onPress={registro}
        >
          <Text style={styles.textoBoton}>
            Enviar Registro
          </Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  textoOpcion: {
    fontSize: 16,
    flex: 1,
  },

  boton: {
    backgroundColor: "#1683f8",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});