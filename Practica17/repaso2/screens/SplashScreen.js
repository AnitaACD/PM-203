import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {

    return (

        <View style={styles.container}>

            <Image
                source={require('../assets/fondo1.jpg')}
                style={styles.imagen}
            />

            <Text style={styles.texto}>
                Registro de Libros
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container:{

        flex:1,

        justifyContent:'center',

        alignItems:'center',

        backgroundColor:'#fff',

    },

    imagen:{

        width:180,

        height:180,

        resizeMode:'contain',

    },

    texto:{

        marginTop:20,

        fontSize:24,

        fontWeight:'bold',

    }

});