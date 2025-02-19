import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

interface HistorialItem {
    id: string;
    monto: number;
    porcentaje: number;
    propina: number;
    total: number;
}

const Propinas = () => {
    const [monto, setMonto] = useState('');
    const [porcentaje, setPorcentaje] = useState(10);
    const [propina, setPropina] = useState(0);
    const [total, setTotal] = useState(0);
    const [historial, setHistorial] = useState<HistorialItem[]>([]);

    const calcularPropina = () => {
        const montoFloat = parseFloat(monto);
        if (isNaN(montoFloat)) {
            alert('Ingrese un monto válido');
            return;
        }
        const montoPropina = (montoFloat * porcentaje) / 100;
        const montoTotal = montoFloat + montoPropina;

        setPropina(montoPropina);
        setTotal(montoTotal);

        const nuevoHistorial: HistorialItem = {
            id: Math.random().toString(),
            monto: montoFloat,
            porcentaje,
            propina: montoPropina,
            total: montoTotal,
        }

        setHistorial([nuevoHistorial, ...historial]);
        setMonto('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Monto del consumo"
                keyboardType="numeric"
                value={monto}
                onChangeText={setMonto}
            />
            <View style={styles.row}>
                <Button title="10%" onPress={() => setPorcentaje(10)} />
                <Button title="15%" onPress={() => setPorcentaje(15)} />
                <Button title="20%" onPress={() => setPorcentaje(20)} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Porcentaje personalizado"
                keyboardType="numeric"
                onChangeText={(text) => setPorcentaje(parseInt(text) || 0)}
            />
            <Button title="Calcular" onPress={calcularPropina} />
            <Text style={styles.resultado}>Propina: ${propina.toFixed(2)}</Text>
            <Text style={styles.resultado}>Total a pagar: ${total.toFixed(2)}</Text>

            <FlatList
                data={historial}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.historialItem}>
                        <Text>Monto: ${item.monto}</Text>
                        <Text>Porcentaje: {item.porcentaje}%</Text>
                        <Text>Propina: ${item.propina.toFixed(2)}</Text>
                        <Text>Total: ${item.total.toFixed(2)}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderColor: 'black',
        margin: 10,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        marginBottom: 15,
    },
    resultado: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    historialItem: {
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default Propinas;
