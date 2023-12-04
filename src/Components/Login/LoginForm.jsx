import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../utils/connection'

export default function LoginForm({ navigation }) {
  
  
  const changeForm = () => {
    navigation.navigate('Registro')
    
  }
  const changeForm2 = () => {
    navigation.navigate('Home')
  }

  const [formData, setFormData] = useState(initialsValues())
  const [formError, setFormError] = useState(initialsValues())

  function initialsValues() {
    return (
      {
        email: '',
        password: '',
      }
    )
  }

  const login = () => {
    console.log('Email: ',formData.email,' Password: ',formData.password)
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
        console.log('Logeado!')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('No existe usuario con esas credenciales')
    })
  }

  return (
    <View>
      <Text style={styles.welcometext}>Bienvenido, Inicia Sesión</Text>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="Correo electrónico"
        placeholderTextColor="#969696"
        onChange={(e) => setFormData({... formData, email: e.nativeEvent.text})}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) => setFormData({...formData, password: e.nativeEvent.text})}
      />
      <TouchableOpacity onPress={changeForm2}>
        <Text style={styles.textBtn}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeForm} style={styles.registeroption}>
        <Text style={styles.textBtn}>Aún no tienes cuenta? Regístrate!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textBtn: {
    color: "black", // Cambiar el color a negro
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    height: 50,
    color: "black", // Cambiar el color a negro
    width: 300,
    backgroundColor: '#1e3040',
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#1e3040',
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  welcometext: {
    color: "black", // Cambiar el color a negro
    margin: 15,
    textAlign: 'center'
  },
  registeroption: {
    marginTop: 25,
    bottom: 0
  }
})