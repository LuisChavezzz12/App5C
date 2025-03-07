import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const ApiClima = () => {
    type Weather = {
        date: string;
        dayOfWeek: string;
        maxTemp: number;
        minTemp: number;
        rainChance: number;
        condition: string;
    };

    const [data, setData] = useState<Weather[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [city, setCity] = useState<string>(''); // Para ingresar la ciudad
    const [searchCity, setSearchCity] = useState<string>(''); // Ciudad para hacer la búsqueda

    useEffect(() => {
        if (searchCity === '') return;

        const cargaDatos = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=ed83b825f03e4b3a89b184504252402&q=${searchCity}&days=5`
                );
                const data = await response.json();

                const forecastData = data.forecast.forecastday.map((day: any) => ({
                    date: day.date,
                    dayOfWeek: new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' }),
                    maxTemp: day.day.maxtemp_c,
                    minTemp: day.day.mintemp_c,
                    rainChance: day.day.daily_chance_of_rain,
                    condition: day.day.condition.text,
                }));

                setData(forecastData);
                setError(null);
            } catch (error) {
                setError('Error al obtener los datos del clima');
            } finally {
                setLoading(false);
            }
        };

        cargaDatos();
    }, [searchCity]);

    const handleSearch = () => {
        if (city.trim() !== '') {
            setSearchCity(city);
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingresa una ciudad"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Buscar" onPress={handleSearch} />

            <FlatList
                data={data}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: getBackgroundColor(item.maxTemp) }]}>
                        <Text style={styles.text}>{item.dayOfWeek}</Text>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.text}>Max: {item.maxTemp}°C / Min: {item.minTemp}°C</Text>
                        <Text style={styles.text}>Probabilidad de Lluvia: {item.rainChance}%</Text>
                        <Text style={styles.text}>Tiempo: {item.condition}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const getBackgroundColor = (temp: number) => {
    if (temp <= 20) return '#87CEEB';
    if (temp > 20 && temp <= 30) return '#FFD700';
    return '#FFA500';
};

export default ApiClima;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
    },
});
