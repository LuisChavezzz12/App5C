import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type Props = {
    title: string;
    onPress: () => void;
    icono?: React.ReactNode;
    posicionIcono?: "izquierda" | "derecha";
    disable?: boolean;
    estilo?: StyleProp<ViewStyle>;
};

const Boton = (props: Props) => {
    

    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.boton, props.estilo, ...(props.disable ? [styles.disable] : [])]}
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
        backgroundColor: "#A67C52",
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    disable: {
        opacity: 0.6,
    },
    texto: {
        color: "black",
        margin: 5,
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
});
