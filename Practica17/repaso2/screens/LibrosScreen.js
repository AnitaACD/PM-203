import React, { useState } from "react";

import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";


export default function LibrosScreen() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");

  const [libros, setLibros] = useState([]);

  const [cargando, setCargando] = useState(false);


  const agregarLibro = () => {

    if (!titulo || !autor || !genero) {

      Alert.alert(
        "Faltan datos",
        "Todos los campos son obligatorios"
      );

      return;
    }


    setCargando(true);


    setTimeout(() => {

      const nuevoLibro = {

        id: Date.now().toString(),

        titulo: titulo,

        autor: autor,

        genero: genero,

      };


      setLibros([...libros, nuevoLibro]);


      setTitulo("");

      setAutor("");

      setGenero("");


      setCargando(false);


      Alert.alert(
        "Libro guardado",
        "Libro guardado correctamente"
      );


    }, 4000);

  };


  const mostrarLibro = ({ item }) => {

    return (

      <View style={styles.libro}>

        <Text style={styles.tituloLibro}>

          {item.titulo}

        </Text>


        <Text>

          Autor: {item.autor}

        </Text>


        <Text>

          Género: {item.genero}

        </Text>

      </View>

    );

  };


  return (

    <ImageBackground

      source={require("../assets/fondo.jpg")}

      style={styles.fondo}

    >

      <SafeAreaView style={styles.safeArea}>


        <Text style={styles.titulo}>

          Catálogo de Libros

        </Text>


        <TextInput

          style={styles.input}

          placeholder="Título del libro"

          value={titulo}

          onChangeText={setTitulo}

        />


        <TextInput

          style={styles.input}

          placeholder="Autor"

          value={autor}

          onChangeText={setAutor}

        />


        <TextInput

          style={styles.input}

          placeholder="Género"

          value={genero}

          onChangeText={setGenero}

        />


        <Pressable

          style={styles.boton}

          onPress={agregarLibro}

          disabled={cargando}

        >

          {

            cargando

            ?

            <View style={styles.cargando}>

              <ActivityIndicator size="small" />

              <Text style={styles.textoBoton}>

                Guardando...

              </Text>

            </View>

            :

            <Text style={styles.textoBoton}>

              Agregar Libro

            </Text>

          }

        </Pressable>


        <Text style={styles.total}>

          Total de libros: {libros.length}

        </Text>


        <FlatList

          data={libros}

          renderItem={mostrarLibro}

          keyExtractor={(item) => item.id}

        />


      </SafeAreaView>

    </ImageBackground>

  );

}


const styles = StyleSheet.create({

  fondo: {

    flex: 1,

  },


  safeArea: {

    flex: 1,

    padding: 20,

  },


  titulo: {

    fontSize: 25,

    fontWeight: "bold",

    textAlign: "center",

    color: "white",

    marginBottom: 20,

  },


  input: {

    backgroundColor: "white",

    borderWidth: 1,

    borderColor: "gray",

    borderRadius: 8,

    padding: 12,

    marginBottom: 12,

  },


  boton: {

    backgroundColor: "#1683f8",

    padding: 15,

    borderRadius: 8,

    alignItems: "center",

  },


  textoBoton: {

    color: "white",

    fontWeight: "bold",

    fontSize: 16,

  },


  cargando: {

    flexDirection: "row",

    alignItems: "center",

    gap: 10,

  },


  total: {

    color: "white",

    fontSize: 17,

    fontWeight: "bold",

    marginTop: 20,

    marginBottom: 10,

  },


  libro: {

    backgroundColor: "rgba(255,255,255,0.85)",

    padding: 15,

    borderRadius: 8,

    marginBottom: 10,

  },


  tituloLibro: {

    fontSize: 17,

    fontWeight: "bold",

    marginBottom: 5,

  },

});