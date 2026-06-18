/*Zona 1 : importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



/*Zona 2: main  */
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text> Aqui va la practica de Aaron </Text>

      <StatusBar style="auto" />


    </View>
  );
}

/*Zona 3: EStilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'colum'
  },

});
