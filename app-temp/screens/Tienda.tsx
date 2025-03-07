import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Boton from '../Components/Boton';

const Tienda = () => {
    type Prod = {
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

    const [producto, setProducto] = useState<Prod | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const respuesta = await fetch('https://fakestoreapi.com/products/1');
            if (!respuesta.ok) {
                throw new Error(`Error en la petición: ${respuesta.status}`);
            }
            const datos: Prod = await respuesta.json();
            console.log(datos);
            setProducto(datos);
        } catch (e) {
            console.log(`Error: ${e}`);
        } finally {
            setLoading(false);
        }
    };

    const screenLoad = () => (
        <View>
            <Text>Tienda</Text>
            <Boton title="Cargar producto" onPress={loadData} />
            {producto && (
                <View>
                    <Text>Producto: {producto.title}</Text>
                    <Text>Precio: {producto.price}</Text>
                    <Text>Descripcion: {producto.description}</Text>
                    <Text>Categoria: {producto.category}</Text>
                    <Image source={{ uri: producto?.image }} style={{ width: 200, height: 200 }} />
                    <Text>Valoracion: {producto.rating.rate}</Text>
                    <Text>Stock: {producto.rating.count}</Text>
                </View>
            )}
        </View>
    );

    const screenUnLoad = () => (
        <View>
            <Text>Cargando Datos</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    return (
        <View>
            {loading ? screenUnLoad() : screenLoad()}
        </View>
    );
};

export default Tienda;

const styles = StyleSheet.create({});
