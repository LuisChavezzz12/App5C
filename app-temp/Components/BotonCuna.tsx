import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
    titulo: string,
    onPress: () => void,
    variante?: 'primario' | 'secundario' | 'peligro',
    disable?: boolean,
    estilo?: StyleProp<ViewStyle>
};

const BotonCuna = ({ titulo, onPress, variante = 'primario', disable = false, estilo }: Props) => {
    const getVariante = () => {
        switch (variante) {
            case 'secundario': return styles.secundario;
            case 'peligro': return styles.peligro;
            default: return styles.primario;
        }
    };

    return (
        <Pressable onPress={onPress} 
            style={[styles.boton, getVariante(), estilo, disable && styles.disable]} 
            disabled={disable}>
            <Text style={styles.texto}>{titulo}</Text>
        </Pressable>
    );
};

export default BotonCuna;

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        backgroundColor: '#4B2E1E',
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#d2b48c',
        borderWidth: 2,
        alignSelf: 'center'
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    primario: {
        backgroundColor: '#4B2E1E'
    },
    secundario: {
        backgroundColor: '#A67B5B'
    },
    peligro: {
        backgroundColor: 'red'
    },
    disable: {
        opacity: 0.6
    }
});