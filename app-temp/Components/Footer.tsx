import { View, Text, StyleSheet, Linking, Dimensions } from 'react-native';
import React from 'react';

type PropiedadesFooter = {
    telefono: string;
    direccion: string;
    correo: string;
    horario: string;
}

const { width } = Dimensions.get("window");

const Footer = (props: PropiedadesFooter) => {
    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.contactContainer]}>
                <Text style={styles.textRight}>Dirección: {props.direccion}</Text>
                <Text style={styles.textRight}>Teléfono: {props.telefono}</Text>
                <Text style={styles.textRight}>Correo: {props.correo}</Text>
                <Text style={styles.textRight}>Horario: {props.horario}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>BabyStore</Text>
                <View style={styles.grid}>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/nosotros')}>Nosotros</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terminos')}>Términos</Text>
                </View>
                <View style={styles.grid}>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacidad')}>Privacidad</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/cobros')}>Cobros</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Enlaces rápidos</Text>
                <View style={styles.inlineLinks}>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/ayuda')}>Ayuda</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/contacto')}>Contacto</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/preguntas')}>Preguntas</Text>
                </View>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 16, 
        paddingVertical: 12, 
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    section: {
        marginBottom: 15, 
    },
    sectionTitle: {
        fontSize: width < 600 ? 25 : 18, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8, 
    },
    textRight: {
        fontSize: width < 600 ? 17 : 58, 
        marginBottom: 6, 
        
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 3,
    },
    inlineLinks: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    link: {
        fontSize: width < 600 ? 20 : 18, 
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 8,
    },
    contactContainer: {
        alignItems: 'baseline',
    }
});
