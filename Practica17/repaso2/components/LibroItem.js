import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LibroItem({item}){

    return(

        <View style={styles.tarjeta}>

            <Text style={styles.titulo}>
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

}

const styles=StyleSheet.create({

    tarjeta:{

        backgroundColor:'#fff',

        padding:15,

        marginBottom:10,

        borderRadius:10,

    },

    titulo:{

        fontWeight:'bold',

        fontSize:18,

        marginBottom:5,

    }

});