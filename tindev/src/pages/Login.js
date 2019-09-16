import React from 'react';
import { View, Plataform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
    return (
        <View 
            style={styles.container}
            // enabled={Plataform.OS === 'ios'}
            // behavior={'padding'}
        >
            <Image source={logo} />

            <TextInput
                autoCorrect="false"
                autoCapitalize="none"
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 48,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    }
})