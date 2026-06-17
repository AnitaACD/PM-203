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
      
      
      <Perfil nombre="Ana Francisco Nicolas" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9° Cuatrimestre" > </Perfil>

      <Perfil nombre="Ana" carrera="ISC" materia="Programación Móvil" cuatrimestre="9°" />
      

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
