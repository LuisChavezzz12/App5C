import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Text>Menu de practicas</Text>
      <Text>1.- Practica 1</Text>
      <Link href={'./screens/Proyecto/ListaProductos'}>
        Lista de Productos</Link>
      <Text>2.- Practica 2</Text>
      <Link href={'./screens/Proyecto/DetalleProductos'}>
        Detalle de Productos</Link>
      <Link href={'./screens/Login'}>
        Login</Link>
      <Link href={'./about'}>
        <Text>About</Text>
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})