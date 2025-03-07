import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

type Producto = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export default function ProductosPorCategoria() {
    const { categoria } = useLocalSearchParams(); // Obtiene la categoría desde la URL
    const [productos, setProductos] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
                if (!respuesta.ok) {
                    throw new Error(`Error en la petición: ${respuesta.status}`);
                }
                const datos = await respuesta.json();
                setProductos(datos);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, [categoria]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Productos de {categoria}</Text>

            {cargando ? (
                <ActivityIndicator size="large" color="#4B2E1E" />
            ) : (
                <FlatList
                    data={productos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={estilos.item}>
                            <Image source={{ uri: item.image }} style={estilos.imagen} />
                            <Text style={estilos.texto}>{item.title}</Text>
                            <Text style={estilos.precio}>${item.price}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#EDE0D4",
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4B2E1E",
        textAlign: "center",
        marginBottom: 10,
    },
    item: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center",
    },
    imagen: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    texto: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
    },
    precio: {
        fontSize: 16,
        color: "#4B2E1E",
    },
});
