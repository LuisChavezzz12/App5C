import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Boton from "../app-temp/Components/Boton";

export default function Login() {
    const router = useRouter();
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [errores, setErrores] = useState<{ usuario?: string; password?: string }>({});

    const validarFormulario = () => {
        let erroresTemp: { usuario?: string; password?: string } = {};

        if (!usuario.trim()) {
            erroresTemp.usuario = "El usuario es obligatorio";
        }
        if (!password.trim()) {
            erroresTemp.password = "La contraseña es obligatoria";
        } else if (password.length < 6) {
            erroresTemp.password = "La contraseña debe tener al menos 6 caracteres";
        }

        setErrores(erroresTemp);
        return Object.keys(erroresTemp).length === 0; // Devuelve true si no hay errores
    };

    const handleLogin = () => {
        if (validarFormulario()) {
            router.replace("/(tabs)/home");
        }
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>PODAI</Text>
            <Text style={estilos.labels}>Usuario</Text>
            <TextInput
                placeholder="Usuario"
                style={estilos.cajas}
                value={usuario}
                onChangeText={setUsuario}
            />
            {errores.usuario && <Text style={estilos.error}>{errores.usuario}</Text>}

            <Text style={estilos.labels}>Password</Text>
            <TextInput
                placeholder="Password"
                style={estilos.cajas}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {errores.password && <Text style={estilos.error}>{errores.password}</Text>}

            <Boton 
                title="INICIAR SESION" 
                onPress={handleLogin} 
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: "#4B2E1E",
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 20,
    },
    container: {
        backgroundColor: "#EDE0D4",
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    labels: {
        fontSize: 15,
        fontWeight: "700",
        color: "#4B2E1E",
    },
    cajas: {
        borderWidth: 3,
        borderRadius: 7,
        borderColor: "#4B2E1E",
        padding: 10,
        marginVertical: 5,
    },
    error: {
        color: "red",
        fontSize: 14,
        marginBottom: 10,
    },
});
