/*Zona 1 : importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBacgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';


/*Zona 2: main  */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableScreen/>
        case 'textInput':
            return <TextInputScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'imageBackground':
            return <ImageBacgroundScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalScreen/>
        

        
        case 'menu':
            default: 
             return (
             <View style={styles.container}>

                <Text> Menu de Practicas: </Text>
                
                <Button onPress={()=>setScreen('tarjetas')} title='Practica: Tarjetas'/>
                
                <Button onPress={()=>setScreen('safeArea')} title='Practica: SafeArea'/>
                
                <Button onPress={()=>setScreen('pressable')} title='Practica: Pressable'/>

                <Button onPress={()=>setScreen('textInput')} title='Practica: TextInput'/>

                <Button onPress={()=>setScreen('flatList')} title='Practica: FlastList'/>

                <Button onPress={()=>setScreen('imageBackground')} title='Practica: ImageBackgrund'/>

                <Button onPress={()=>setScreen('activityIndicator')} title='Practica: ActivityIndicator'/>

                <Button onPress={()=>setScreen('modal')} title='Practica: Modal'/>

                <StatusBar style="auto" />
            
            
            </View>
            );
        }
    }


/*Zona 3: EStilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'colum',
  },

});
