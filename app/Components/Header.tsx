import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type PropiedadesHeader = {
    titulo: string,
    nombre: string,
    imagen: any,
}

const Header = (props: PropiedadesHeader) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props.imagen} style={styles.imagen} />
            </View>
            <View>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text style={styles.titulo}>{props.nombre}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
    },
    imagen: {
        width: 200,
        height: 130,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'black',

    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})
