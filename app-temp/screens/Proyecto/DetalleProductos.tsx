import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProductoDetalle from '../../Components/ProductoDetalle'; // Asegúrate de tener la ruta correcta
import Footer from '../../Components/Footer'; // Asegúrate de tener la ruta correcta
import Header from '../../Components/Header';

const logo = require('../../../assets/babystore.png');

const ProductoScreen = ({ navigation }: any) => {
    const [producto] = useState({
        title: 'Cuna Inteligente',
        price: 199.99,
        description:
            'Cuna inteligente con sensores de movimiento, temperatura y sonido. Conectada a tu smartphone.',
        category: 'Cunas y Muebles',
        image: require('../../../assets/cunainteligente.jpg'), // Cambié la ruta aquí
        features: [
            'Sensores de movimiento',
            'Control de temperatura',
            'Sonidos relajantes',
            'Conexión móvil',
        ],
        stock: 15,
    });

    const handleVolver = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header
                    titulo="BabyStore"
                    imagen={logo}
                    subtitulo="¡Todo para tu bebé en un solo lugar!"
                />

                {/* Detalle del producto */}
                <ProductoDetalle producto={producto} onVolver={handleVolver} />

                <Footer
                    telefono="7733855315"
                    direccion="Huejutla de Reyes, Hidalgo. Colonia Centro c.p 43000"
                    correo="chavezvargasluisjesus@gmail.com"
                    horario="Lunes - Viernes 8:00 AM - 4:00 PM"
                    
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    footer: {
        height: 70, // Ajusta la altura del footer
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

export default ProductoScreen;
