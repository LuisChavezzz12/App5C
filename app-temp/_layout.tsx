import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <View>
            <Stack>
                <Stack.Screen name="Index" />
                <Stack.Screen name="ListaProductos" />
                <Stack.Screen name="DetalleProductos" />
                <Stack.Screen name="Login" />
            </Stack>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({})