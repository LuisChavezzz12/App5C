import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./app/Components/Header";
import Footer from "./app/Components/Footer";
  import WeatherApi from "./app/screens/WeatherApi";

export default function App() {
  return (
    <View style={estilos.container}>
      <Header
        titulo="Api Clima 5 Dias"
        nombre="Luis Jesus Chavez vargas"
        imagen={require('./assets/clima.jpg')}
      />

      <WeatherApi />

      <Footer
        fecha="24/02/2025"
        telefono="773-385-5315"
        dedicatoria="Gracias por su preferencia"
      />
    </View>

  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: '#4B2E1E',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#EDE0D4',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  labels: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4B2E1E'
  },
  cajas: {
    borderWidth: 3,
    borderRadius: 7,
    borderColor: '#4B2E1E',
    padding: 10,
    marginVertical: 10
  }
})