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
    <ScrollView style={styles.Container}>
      <Text style={styles.titulo}>Esta es la pagina principal</Text>
      <View styles={styles.inputgruop}>
        <Button title="Crear Mascota" onPress={changeForm} />
      </View>
      <View>
        <Button
          styles={styles.inputgruop}
          title="Eliminar Mascota"
          onPress={changeForm2}
        />
      </View>
      <View styles={styles.inputgruop}>
        <Button title="Editar Mascota" onPress={changeForm3} />
      </View>
      <View>
        <Button
          styles={styles.inputgruop}
          title="Ver Mascota"
          onPress={changeForm4}
        />
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
  Container: {
    flex: 1,
    padding: 35,
  },
  inputgruop: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
});
