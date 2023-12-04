import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import connection from "../../utils/connection";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Vista() {
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
    <FlatList
      data={lista}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemNombre}>{item.Nombre}</Text>
          <Text style={styles.itemDetalle}>Animal: {item.Animal}</Text>
          <Text style={styles.itemDetalle}>Raza: {item.Raza}</Text>
          <Text style={styles.itemDetalle}>Edad: {item.Edad} años</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: "##CFCFCF",
    padding: 10,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  itemNombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDetalle: {
    fontSize: 14,
    color: "#333",
  },
});
