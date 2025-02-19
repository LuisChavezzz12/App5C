import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hola, Luis</Text>
                <View style={styles.menuIcons}>
                    <Text>❓</Text>
                    <Text>☰</Text>
                </View>
            </View>

            {/* Opciones */}
            <View style={styles.optionsContainer}>
                <Text style={styles.option}>⇆ Transferir & Dimo</Text>
                <Text style={styles.option}>＋ Oportunidades</Text>
                <Text style={styles.option}>💵 Retiro sin tarjeta</Text>
                <Text style={styles.option}>⋯ Más</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>CUENTAS EN PESOS</Text>
                    <Text style={styles.accountNumber}>0001ah0185</Text>
                    <Text style={styles.balance}>$ 42.63</Text>
                    <Text style={styles.label}>Saldo disponible</Text>
                </View>

                {/* Contenedor de la primera imagen */}
                <View style={styles.promoCard}>
                    <Image source={require('./assets/img1.jpg')} style={styles.promoImage} />
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoText}>Con pagaré, tu dinero seguro crece. Invierte hoy mismo. Comienza desde $2,000.00</Text>
                        <Text style={styles.promoLink}>Me interesa</Text>
                    </View>
                </View>

                {/* Contenedor de la segunda imagen */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>TARJETAS</Text>
                    <Text style={styles.accountNumber}>0001ah0185</Text>
                    <Image source={require('./assets/img2.jpg')} style={styles.cardImage} />
                </View>

                {/* Botones en fila con texto */}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Inicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Salud Financiera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Oportunidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Notificaciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ayuda</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6F8",
    },
    header: {
        backgroundColor: "#004481",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    menuIcons: {
        flexDirection: "row",
        gap: 15,
    },
    optionsContainer: {
        backgroundColor: "#1976D2",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    option: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#666",
    },
    accountNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#004481",
        marginVertical: 5,
    },
    balance: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#27AE60",
    },
    label: {
        fontSize: 14,
        color: "#666",
    },
    promoCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        marginBottom: 20,
    },
    promoImage: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    promoTextContainer: {
        flex: 1,
    },
    promoText: {
        fontSize: 16,
        color: "#333",
    },
    promoLink: {
        fontSize: 16,
        color: "#1976D2",
        fontWeight: "bold",
        marginTop: 5,
    },
    cardImage: {
        width: 80,
        height: 50,
        marginTop: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: "#B0B0B0",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
});
