import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import connection from "../../utils/connection";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Avatar } from 'react-native-elements'

export default function Edit(props) {

  const db = getFirestore(connection);
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const getLista = async () => {
      try {
        const traerMascotas = await getDocs(collection(db, "Mascotas"));

        const mascotas = traerMascotas.docs
          .map((doc) => {
            const datos = doc.data();
            return datos.hasOwnProperty("Nombre") &&
              datos.hasOwnProperty("Animal") &&
              datos.hasOwnProperty("Raza") &&
              datos.hasOwnProperty("Edad")
              ? {
                  id: doc.id,
                  Nombre: datos.Nombre,
                  Animal: datos.Animal,
                  Raza: datos.Raza,
                  Edad: datos.Edad,
                }
              : null;
          })
          .filter((mascota) => mascota !== null)
          .sort((a, b) => a.Nombre.localeCompare(b.Nombre));

        setLista(mascotas);
        
      } catch (error) {
        console.log(error);
      }
    };

    getLista();
  }, []);
  return (
    <View>
      <ScrollView>
        {
          lista.map(m => {
            return (
              <ListItem key={m.id} bottomDivider onPress={()=>{
                props.navigation.navigate('Editar_Formulario',{
                  id: m.id
                })
              }}>
                <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{m.Nombre}</ListItem.Title>
                  <ListItem.Subtitle>{m.Animal}</ListItem.Subtitle>
                  <ListItem.Subtitle>{m.Raza}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})