import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, FlatList, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [titulo, setTitulo] = useState('');

  // Función que se ejecuta al presionar el botón de guardar
  const guardar = () => {
    Alert.alert(
      'Sin resultados',
      'Titulo:${titulo}',
    );
  };

  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.background}>
      <Text style={styles.titulo}> Buscador de Peliculas </Text>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Titulo:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingresa el Titulo de la Pelicula'
            onChangeText={setTitulo}
            value={titulo}
          />

          <Button style={styles.button} onPress={guardar} title='BUSCAR'></Button>

        </View>
      </View>
      <FlatList
        data={[{ key: 1, titulo: 'Intensamente 2' },
        { key: 2, titulo: 'Rapidos y Furiosos' },
        { key: 3, titulo: 'Bad Boys' },
        { key: 4, titulo: 'Diario de una Pasion' },
        { key: 5, titulo: 'Avengers' },
        { key: 6, titulo: 'Coraline y la Puerta Secreta' },
        { key: 7, titulo: 'Parasitos' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}> {item.titulo} </Text>} // Itera los datos que estan en la lista
      />


      <StatusBar style="auto" />
    </ImageBackground>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    height: 45,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  titulo: {
    alignItems: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 90,
  },
  item: {
    padding: 10,
    borderColor: 'blue',
    color: 'white',
    fontSize: 25,
  },
});