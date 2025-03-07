import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import BotonCuna from '../../Components/BotonCuna';


const Registro = () => {
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Regístrate</Text>
            <TextInput placeholder="Nombre Completo" style={estilos.cajas} />
            <TextInput placeholder="Correo Electrónico" style={estilos.cajas} keyboardType="email-address" />
            <TextInput placeholder="Contraseña" style={estilos.cajas} secureTextEntry />
            <BotonCuna titulo="Registrarse" onPress={() => console.log('Registro presionado')} />
            <Text style={estilos.textoInfo}>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</Text>
            <Text style={estilos.enlace}>¿Ya tienes una cuenta? Iniciar Sesión</Text>
        </View>
    );
};

export default Registro;

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#deb887',
        padding: 20,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        elevation: 3,
        // alignItems: 'center',
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
        borderColor: '#8b4513',
        padding: 10,
        marginVertical: 5,
        width: '100%',
        backgroundColor: 'white'
    },
    textoInfo: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        color: '#800000'
    },
    enlace: {
        color: '#A67B5B',
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'

    }
});