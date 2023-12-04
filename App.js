import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/Components/Login/LoginForm.jsx';
import Home from './src/Components/Home/Home.jsx';
import colors from './src/utils/colors.js'
import RegisterForm from './src/Components/Login/RegisterForm.jsx';
import Create from './src/Components/Cruds/Create.jsx'
import Delete from './src/Components/Cruds/Delete.jsx'
import Edit from './src/Components/Cruds/Edit.jsx'
import Vista from './src/Components/Cruds/Vista.jsx'
import EditForm from './src/Components/Cruds/EditForm.jsx';

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Registro" component={RegisterForm} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Crear" component={Create} />
        <Stack.Screen name="Borrar" component={Delete} />
        <Stack.Screen name="Editar" component={Edit} />
        <Stack.Screen name="Editar_Formulario" component={EditForm} />
        <Stack.Screen name="Ver" component={Vista} />
        
      </Stack.Navigator>
    );
  }

  return (
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABF1BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
