import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type PropiedadesFooter = {
    fecha: string,
    telefono: string,
    dedicatoria: string
}

const Footer = (props: PropiedadesFooter) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textos}>{props.fecha}</Text>
            <Text style={styles.textos}>{props.telefono}</Text>
            <Text style={styles.textos}>{props.dedicatoria}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 2,
        width: '100%',
        alignItems: 'center',
    },
    textos: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})