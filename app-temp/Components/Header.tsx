import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import React from 'react';

type PropiedadesHeader = {
    titulo: string,
    imagen: any,
    subtitulo: string,
};

const Header = (props: PropiedadesHeader) => {
    return (
        <View style={styles.container}>

            <View style={styles.headerTop}>

                <Image source={props.imagen} style={styles.imagen} />
                <Text style={styles.titulo}>{props.titulo}</Text>
            </View>


            <Text style={styles.subtitulo}>{props.subtitulo}</Text>



        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginLeft: 20,
    },
    imagen: {
        width: 150,
        height: 120,
    },
    subtitulo: {
        fontSize: 16,
        color: '#888',
        marginTop: 0,
        marginBottom: 10,
        textAlign: 'center',
    },
});
