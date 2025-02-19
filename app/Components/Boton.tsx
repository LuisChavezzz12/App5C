import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type Props = {
    title: string;
    onPress: () => void;
    variante?: "primario" | "secundario" | "peligro";
    icono?: React.ReactNode;
    posicionIcono?: "izquierda" | "derecha";
    disable?: boolean;
    estilo?: StyleProp<ViewStyle>;
};

const Boton = (props: Props) => {
    const getVariante = () => {
        switch (props.variante) {
            case "secundario":
                return styles.secundario;
            case "peligro":
                return styles.peligro;
            default:
                return styles.primario;
        }
    };

    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.boton, getVariante(), props.estilo, ...(props.disable ? [styles.disable] : [])]}
            disabled={props.disable}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.icono && props.posicionIcono === "izquierda" && props.icono}
                <Text style={styles.texto}>{props.title}</Text>
                {props.icono && props.posicionIcono === "derecha" && props.icono}
            </View>
        </Pressable>
    );
};

export default Boton;

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#00A2E8",
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    primario: {
        backgroundColor: "#00A2E8",
    },
    secundario: {
        backgroundColor: "#0077AB",
    },
    peligro: {
        backgroundColor: "#EB3324",
    },
    disable: {
        opacity: 0.6,
    },
    texto: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
});
