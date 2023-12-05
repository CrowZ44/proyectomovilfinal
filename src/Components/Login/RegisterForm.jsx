import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { validateEmail } from '../../utils/validacion'
import { app } from '../../utils/connection'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm({ navigation }) {
    const changeForm = () => {
        navigation.navigate('Login')
    }
    
        
    const [formData, setFormData] = useState(initialsValues())
    const [formError, setFormError] = useState(initialsValues())

    function initialsValues() {
        return (
            {
                email: '',
                password: '',
                repeatPassword: '',
            }
        )
    }

    const register = () => {
        let errors = {}
        console.log(validateEmail(formData.email));
        if (!formData.email || !formData.password || !formData.repeatPassword) {
            if (!formData.email) {
                errors.email = true
            }
            if (!formData.password) {
                errors.password = true
            }
            if (!formData.repeatPassword) {
                errors.repeatPassword = true
            }
        } else if (!validateEmail(formData.email)) {
            errors.email = true
        } else if (formData.password !== formData.repeatPassword) {
            errors.password = true
            errors.repeatPassword = true
        } else if (formData.password.length < 6) {
            errors.password = true
            errors.repeatPassword = true
        } else {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setFormError({
                        email:true,
                        password:true,
                        repeatPassword:true
                    })
                });
        }
        setFormError(errors)
        console.log(errors)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder="Correo electrónico"
                placeholderTextColor="#FFFFFF"
                onChange={(e) => setFormData({ ...formData, email: e.nativeEvent.text })}
            />
            <TextInput
                style={[styles.input, formError.password && styles.error]}
                placeholder="Contraseña"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, password: e.nativeEvent.text })}
            />
            <TextInput
                style={[styles.input, formError.repeatPassword && styles.error]}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, repeatPassword: e.nativeEvent.text })}
            />
            <TouchableOpacity onPress={register}>
                <Text style={styles.textBtn}>Registrarse</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.textBtn}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A2F5BF', // Fondo verde pastel
    },
    textBtn: {
        color: "#FFFFFF", // Texto blanco
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        height: 50,
        color: "#FFFFFF", // Texto blanco
        width: 300,
        backgroundColor: '#006400', // Fondo verde oscuro
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#006400', // Borde verde oscuro
        fontSize: 18,
        paddingHorizontal: 20,
        marginBottom: 30,
        textAlign: 'center', // Centra el texto
    },
    login: {
        marginBottom: 10,
    },
    error: {
        borderWidth: 1.5,
        borderColor: '#940c0c',
    },
});