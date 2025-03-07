import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function CategoriasScreen() {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const cargarCategorias = async () => {
            try {
                const respuesta = await fetch("https://fakestoreapi.com/products/categories");
                if (!respuesta.ok) {
                    throw new Error(`Error: ${respuesta.status}`);
                }
                const datos = await respuesta.json();
                setCategorias(datos);
            } catch (error) {
                console.error("Error obteniendo las categorías:", error);
            } finally {
                setCargando(false);
            }
        };

        cargarCategorias();
    }, []);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Categorías</Text>

            {cargando ? (
                <ActivityIndicator size="large" color="#4B2E1E" />
            ) : (
                <FlatList
                    data={categorias}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <View style={estilos.item}>
                            <Text style={estilos.texto}>{item}</Text>
                            <TouchableOpacity
                                style={estilos.boton}
                                onPress={() => router.push(`/productosPorCategoria/${item}`)}
                            >
                                <Text style={estilos.botonTexto}>Ver productos</Text>
                            </TouchableOpacity>
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
        fontSize: 24,
        fontWeight: "bold",
        color: "#4B2E1E",
        textAlign: "center",
        marginBottom: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#4B2E1E",
        alignItems: "center",
    },
    texto: {
        fontSize: 18,
        color: "#4B2E1E",
        marginBottom: 5,
    },
    boton: {
        backgroundColor: "#4B2E1E",
        padding: 10,
        borderRadius: 10,
    },
    botonTexto: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
