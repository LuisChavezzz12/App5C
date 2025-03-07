import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logoContainer}>
                    <Text style={styles.menuIcon}>☰</Text>
                    <Text style={styles.logo}>BabyStore</Text>
                </View>
                <TextInput
                    style={styles.searchInput}
                    placeholder="¿Buscar?"
                    placeholderTextColor="#666"
                />
            </View>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D2B48C",
        width: "100%",
        paddingTop: 40,
        paddingBottom: 15,
    },
    navbar: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5DC",
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "space-between", // Asegura mejor distribución
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuIcon: {
        fontSize: 28,
        marginRight: 10, // Reduce separación con el título
        color: "#000",
    },
    logo: {
        fontSize: width < 600 ? 18 : 22,
        fontWeight: "bold",
    },
    searchInput: {
        backgroundColor: "#ddd",
        borderRadius: 12,
        borderWidth: 1.5,
        fontSize: width < 600 ? 16 : 18,
        color: "#000",
        paddingHorizontal: 12,
        paddingVertical: 8,
        flex: 1, // Hace que ocupe todo el espacio posible sin empujar los otros elementos
        maxWidth: "50%", // Evita que sea demasiado ancho en pantallas grandes
        minWidth: "35%", // Evita que sea muy pequeño en pantallas chicas
    },
});
