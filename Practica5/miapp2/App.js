/*Zona 1 : importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';


/*Zona 2: main  */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>--------------- componentes Nativos------------------</Text>

      <Image source={require('./assets/wave.png')}/>
      <Text> Hola mundo react Native </Text>
      
      <Text>--------------- componente propio ------------------</Text>

      <Saludo></Saludo>

      <Text>--------------- componente propio compuesto------------------</Text>
      
      <Saludo2></Saludo2>
      <Text>--------------- Componente Nativo---------------------------</Text>
      <Perfil></Perfil>

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
  },
});
