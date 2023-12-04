import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import connection from '../../utils/connection'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'


const db = getFirestore(connection)

const Create = (props) => {

  
  const initialState = {
    Nombre: "",
    Animal: "",
    Raza: "",
    Edad: "",
  };
  const [state, setState] = useState(initialState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const guardar = async()=>{

    try{
      await addDoc(collection(db, 'Mascotas'),{
        ...state
      })

      Alert.alert('Alerta', 'guardado con exito')
      //console.log(state)
      props.navigation.navigate('Home')
    }
    catch{
      console.error(error)
    }

  }
  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.titulo}>Ingresar Mascota</Text>
      <View style={styles.inputgruop}>
        <TextInput placeholder="Nombre" value={state.Nombre} 
          onChangeText={(value)=>handleChangeText(value, 'Nombre')}/>
      </View>
      <View style={styles.inputgruop}>
        <TextInput placeholder="Animal" value={state.Animal} 
          onChangeText={(value)=>handleChangeText(value, 'Animal')} />
      </View>
      <View style={styles.inputgruop}>
        <TextInput placeholder="Raza" value={state.Raza} 
          onChangeText={(value)=>handleChangeText(value, 'Raza')} />
      </View>
      <View style={styles.inputgruop}>
        <TextInput placeholder="Edad" keyboardType="numeric" value={state.Edad} 
          onChangeText={(value)=>handleChangeText(value, 'Edad')}/>
      </View>
      <Button title="Guardar" onPress={guardar}></Button>
    </ScrollView>
  );
};

export default Create;

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  },
  Container: {
    flex: 1,
    padding: 35,
  },
  inputgruop: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
  },
});
