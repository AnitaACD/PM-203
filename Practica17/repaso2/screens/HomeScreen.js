import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from 'react-native';

import LibroItem from '../components/LibroItem';

export default function HomeScreen() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);

  const [cargando, setCargando] = useState(false);

  const guardarLibro = () => {

    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {

      Alert.alert(
        'Campos Vacíos',
        'Debes llenar todos los campos.'
      );

      return;
    }

    setCargando(true);

    setTimeout(() => {

      const nuevoLibro = {

        id: Date.now().toString(),

        titulo,

        autor,

        genero,

      };

      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert(
        'Correcto',
        'Libro agregado correctamente.'
      );

    }, 4000);

  };

  return (

    <ImageBackground

      source={require('../assets/fondo.jpg')}

      style={styles.fondo}

      resizeMode="cover"

    >

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Registro de Libros Leídos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#666"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#666"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#666"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable

          style={styles.boton}

          onPress={guardarLibro}

        >

          <Text style={styles.textoBoton}>

            Agregar Libro

          </Text>

        </Pressable>

        {

          cargando && (

            <View style={styles.cargando}>

              <ActivityIndicator

                size="large"

                color="#1565C0"

              />

              <Text style={styles.textoCarga}>

                Guardando libro...

              </Text>

            </View>

          )

        }

        <Text style={styles.total}>

          Total de Libros: {libros.length}

        </Text>

        <FlatList

          data={libros}

          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (

            <LibroItem item={item} />

          )}

          showsVerticalScrollIndicator={false}

        />

      </View>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({
      fondo: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  titulo: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  cargando: {
    alignItems: 'center',
    marginBottom: 15,
  },

  textoCarga: {
    marginTop: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  total: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  lista: {
    paddingBottom: 20,
  },

});