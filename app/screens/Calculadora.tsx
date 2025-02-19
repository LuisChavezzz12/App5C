import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Boton from '../Components/Boton';



const Calculadora = () => {
    //Estados v1, v2 y resultado...
    const [v1, setV1] = useState<string>('');
    const [v2, setV2] = useState<string>('');
    const [resultado, setResultado] = useState<number>(0);

    //Logica del componente...
    const sumar = () => {
        const n1: number = parseFloat(v1);
        const n2: number = parseFloat(v2);
        const res = n1 + n2;
        setResultado(res);
    }
    const restar = () => {
        const n1: number = parseFloat(v1);
        const n2: number = parseFloat(v2);
        const res = n1 - n2;
        setResultado(res);
    }
    const multiplicar = () => {
        const n1: number = parseFloat(v1);
        const n2: number = parseFloat(v2);
        const res = n1 * n2;
        setResultado(res);
    }
    const dividir = () => {
        const n1: number = parseFloat(v1);
        const n2: number = parseFloat(v2);
        if (n2 != 0) {
            const res = n1 / n2;
            setResultado(res);
        } else {
            alert('No se puede dividir entre 0');
        }
    }
    //Renderizado del componente...
    return (
        <View>
            <Text>Valor 1</Text>
            <TextInput placeholder='Valor 1'
                onChangeText={(x) => { setV1(x) }}></TextInput>
            <Text>Valor 2</Text>
            <TextInput placeholder='Valor 2'
                onChangeText={setV2}></TextInput>
            <View>
                <Boton title='+' onPress={sumar}></Boton>
                <Boton title='-' onPress={restar}></Boton>
                <Boton title='*' onPress={multiplicar}></Boton>
                <Boton title='/' onPress={dividir}></Boton>
            </View>
            <Text>Resultado: {resultado}</Text>
            <Text>Valor de V1: {v1} y Valor de V2: {v2}</Text>
        </View>
    )
}

export default Calculadora