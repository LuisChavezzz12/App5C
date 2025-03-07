import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import React from 'react';
import Boton from './Boton'; // Si tienes un componente Boton propio

type propsVistaP = {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const VistaProductos = (props: propsVistaP) => {
    const handlePress = () => {
        Alert.alert("Detalles del Producto", `Ver más sobre: ${props.title}`);
    };

    return (
        <View style={styles.cardContainer}>
            <Image
                source={typeof props.image === 'string' ? { uri: props.image } : props.image}
                style={styles.productImage}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.productTitle}>{props.title}</Text>
                <Text style={styles.productPrice}>${props.price}</Text>
                <Text style={styles.productDescription}>{props.description}</Text>
                <Text style={styles.productCategory}>{props.category}</Text>
                <Boton title="Ver Producto" onPress={handlePress} />
            </View>
        </View>
    );
};

export default VistaProductos;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#D3D3D3',
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
        marginRight: 15,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginBottom: 25,
        width: 250,
        height: 400,
    },
    productImage: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 12,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    productPrice: {
        fontSize: 20,
        color: '#2ECC71',
        marginBottom: 6,
    },
    productDescription: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 8,
        maxHeight: 60,
        overflow: 'hidden',
    },
    productCategory: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 12,
    },
});
