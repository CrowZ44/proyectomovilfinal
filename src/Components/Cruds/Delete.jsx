import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import connection from "../../utils/connection";

export default function Delete() {
  const [mascotas, setMascotas] = useState([]);
  const db = getFirestore(connection);

  useEffect(() => {
    const fetchMascotas = async () => {
      const querySnapshot = await getDocs(collection(db, "Mascotas"));
      const mascotasOrdenadas = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => a.Nombre.localeCompare(b.Nombre)); // Ordena alfabéticamente por el nombre de la mascota

      setMascotas(mascotasOrdenadas);
    };

    fetchMascotas();
  }, []);

  const eliminarMascota = async (id) => {
    await deleteDoc(doc(db, "Mascotas", id));
    setMascotas(mascotas.filter((mascota) => mascota.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mascotas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.Nombre}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => eliminarMascota(item.id)}
            >
              <Text style={styles.buttonText}>Borrar Mascota</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#b0e57c',
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
