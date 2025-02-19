import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./app/Components/Header";
import Footer from "./app/Components/Footer";
import Login from "./app/screens/Login";
import Calculadora from "./app/screens/Calculadora";
import Propinas from "./app/screens/Propinas";

export default function App() {
  return (
    <View style={estilos.container}>
      <Header
        titulo="Calculadora"
        nombre="Luis Jesus Chavez vargas"
        imagen={require('./assets/img1.jpg')}
      />

      <Propinas />

      <Footer
        fecha="2021"
        telefono="123-456-7890"
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