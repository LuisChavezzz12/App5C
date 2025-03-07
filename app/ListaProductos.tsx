import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListaProductos = () => {
    //Definir la estructura de datos a emplear por cada item
    type productos = {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    };

    //Definicion de estados en la APP.
    const [productos, setProductos] = useState<productos[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);

    //Definimos la peticion web con el hook useEffect.
    useEffect(() => {
        const cargaDatos = async () => {
            try {
                //Vamos a realizar la peticion fetch.
                const respuesta = await fetch('https://fakestoreapi.com/products');
                
                //Verificamos si la petición fue exitosa
                if (!respuesta.ok) {
                    throw new Error(`Error al conectar con la fuente de datos: ${respuesta.status}`);
                }
                
                //Procedemos a pasar la respuesta a un objeto JSON.
                const datos = await respuesta.json();
                setProductos(datos);
            } catch (error) {
                console.log(`Error en la obtención de datos: ${error}`);
            } finally {
                setCargando(false);
            }
        };
        cargaDatos();
    }, []); // <- Estas son las dependencias

    //Pantalla unLoadScreen
    const unLoadScreen = () => (
        <View style={estilos.container}>
            <Text>Cargando Datos...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    //Pantalla loadScreen
    const loadScreen = () => (
        <View style={estilos.container}>
            <Text>Datos Cargados</Text>
            <FlatList
                data={productos}
                renderItem={({ item }) => productoItem({ item })}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );

    //Definimos el item por producto para imprimir en el FlatList.
    const productoItem = ({ item }: { item: productos }) => (
        <View style={estilos.containerItem}>
            <Text>PRODUCTO: {item.title}</Text>
            <Text>PRECIO: ${item.price}</Text>
            <Text>DESCRIPCIÓN: {item.description}</Text>
            <Text>CATEGORÍA: {item.category}</Text>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
            <Text>CALIFICACIÓN: {item.rating.rate}</Text>
            <Text>CANTIDAD: {item.rating.count}</Text>
        </View>
    );

    return (
        <View style={estilos.container}>
            {cargando ? unLoadScreen() : loadScreen()}
        </View>
    );
};

export default ListaProductos;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    containerItem: {
        backgroundColor: 'white',
        padding: 10,    
        marginVertical: 5,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        
    },
});
