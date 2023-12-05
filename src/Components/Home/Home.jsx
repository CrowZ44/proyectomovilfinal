import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const changeForm = () => {
    navigation.navigate("Crear");
  };
  const changeForm2 = () => {
    navigation.navigate("Borrar");
  };
  const changeForm3 = () => {
    navigation.navigate("Editar");
  };
  const changeForm4 = () => {
    navigation.navigate("Ver");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Esta es la pagina principal</Text>
      <View style={styles.buttonContainer}>
        <Button title="Crear Mascota" onPress={changeForm} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Eliminar Mascota" onPress={changeForm2} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar Mascota" onPress={changeForm3} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ver Mascota" onPress={changeForm4} color="green" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
    color: "black", // Cambiar el color a negro
  },
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "lightgreen", // Cambiar el color de fondo a verde lima
  },
  buttonContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    backgroundColor: "darkgreen", // Cambiar el color de fondo de los botones a verde oscuro
  },
});
