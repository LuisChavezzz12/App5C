import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import BotonCuna from '../../Components/BotonCuna';

const LoginCuna = () => {
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Iniciar Sesión</Text>
            <TextInput placeholder="Correo Electrónico" style={estilos.cajas} keyboardType="email-address" />
            <TextInput placeholder="Contraseña" style={estilos.cajas} secureTextEntry />
            <BotonCuna titulo="Iniciar Sesión" onPress={() => console.log('Login presionado')} />
            <Text style={estilos.textoInfo}>Al iniciar sesión, aceptas nuestras Condiciones de uso y Política de privacidad.</Text>
            <Text style={estilos.enlace}>¿No tienes una cuenta? Regístrate</Text>
        </View>
    );
};

export default LoginCuna;

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#D7B49E',
        padding: 20,
        borderRadius: 10,
        width: '85%',
        alignSelf: 'center',
        elevation: 3,
        //alignItems: 'center'
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4E3629',
        marginBottom: 15,
        textAlign: 'center'
    },
    cajas: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#8B5E3B',
        padding: 10,
        marginVertical: 5,
        width: '100%',
        backgroundColor: 'white'
    },
    textoInfo: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        color: '#4E3629',

    },
    enlace: {
        color: '#A67B5B',
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});