import React, { useEffect } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";


export default function SplashScreen({ cambiarPantalla }) {

  useEffect(() => {

    setTimeout(() => {

      cambiarPantalla();

    }, 2000);

  }, []);


  return (

    <View style={styles.container}>

      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.imagen}
      />

      <Text style={styles.texto}>
        repaso2
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "white",

  },


  imagen: {

    width: 150,

    height: 150,

    resizeMode: "contain",

  },


  texto: {

    fontSize: 20,

    fontWeight: "bold",

    marginTop: 10,

  },

});