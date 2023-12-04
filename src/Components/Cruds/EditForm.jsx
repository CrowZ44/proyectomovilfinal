import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
    Alert,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import connection from '../../utils/connection'
  import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct, updateDoc} from 'firebase/firestore'

const EditForm = (props) => {

    const db = getFirestore(connection);

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

      const update = async () => {
        const ref = doc(db, "Mascotas", props.route.params.id)
        await updateDoc(ref, {
            Nombre: state.Nombre,
            Animal: state.Animal,
            Raza: state.Raza,
            Edad: state.Edad,
        })
        setState(initialState)
        props.navigation.navigate("Ver")
      }

      useEffect(() => {
        get(props.route.params.id)
        // console.log(state)
      }, []);

      const get = async (id) => {
        const querySnapshot = await getDocs(collection(db, "Mascotas"));
        querySnapshot.forEach((doc) => {
          if (doc.id === id){
            // console.log(doc.data());
            setState({
              Nombre: doc.data().Nombre,
              Animal: doc.data().Animal,
              Raza: doc.data().Raza,
              Edad: doc.data().Edad
            })
            
          }
        });
        
      }

  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.titulo}>Editar Mascota</Text>
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
      <Button title="Modificar" onPress={()=>update()}></Button>
    </ScrollView>
  )
}

export default EditForm

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