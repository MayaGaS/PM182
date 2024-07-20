import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react'; // se importan todas las exportaciones del módulo react
import { NavigationContainer } from '@react-navigation/native'; // se importa el componente NavigationContainer (se usa para gestionar la navegación)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // se  importa la función createNativeStackNavigator (se usa para crear un "navegador de pila")

// creacion de funcion 
function homeScreen({navigation}){
  return(
    <View>
      <Text> Home Screen </Text>
      <Button title="Ir a detalles"/>  
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
