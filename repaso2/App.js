import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [peliculas, setPeliculas] = useState([
    { key: 1, titulo: 'Intensamente 2' },
    { key: 2, titulo: 'Rapidos y Furiosos' },
    { key: 3, titulo: 'Bad Boys' },
    { key: 4, titulo: 'Diario de una Pasion' },
    { key: 5, titulo: 'Avengers' },
    { key: 6, titulo: 'Coraline y la Puerta Secreta' },
    { key: 7, titulo: 'Parasitos' },
  ]);

  // Función que se ejecuta al presionar el botón de buscar
  const buscar = () => {
    if (titulo.trim() === '') {
      // Mostrar toda la lista si no hay texto en el campo de búsqueda
      setPeliculas([
        { key: 1, titulo: 'Intensamente 2' },
        { key: 2, titulo: 'Rapidos y Furiosos' },
        { key: 3, titulo: 'Bad Boys' },
        { key: 4, titulo: 'Diario de una Pasion' },
        { key: 5, titulo: 'Avengers' },
        { key: 6, titulo: 'Coraline y la Puerta Secreta' },
        { key: 7, titulo: 'Parasitos' },
      ]);
    } else {
      // Filtrar películas según el título ingresado
      const resultados = peliculas.filter(pelicula =>
        pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
      );
      setPeliculas(resultados);
      if (resultados.length === 0) {
        Alert.alert('Sin Resultados', `No se encontraron películas con el título "${titulo}"`);
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/4.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Buscador de Películas</Text>

        {/* Tarjeta de búsqueda */}
        <View style={styles.card}>
          <TextInput
            style={styles.textInput}
            placeholder='Ingresa el Título de la Película'
            onChangeText={setTitulo}
            value={titulo}
          />
          <TouchableOpacity style={styles.button} onPress={buscar}>
            <Text style={styles.buttonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>

        {/* Tarjeta de resultados */}
        <View style={styles.card}>
          <View style={styles.listaContainer}>
            {peliculas.map((pelicula, index) => (
              <Text key={pelicula.key} style={styles.item}>{pelicula.titulo}</Text>
            ))}
          </View>
        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semi-transparente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20, // Ajustar según sea necesario
    marginBottom: 20,
  },
  listaContainer: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#000',
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
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20, // Ajustar según sea necesario
  },
  item: {
    padding: 10,
    borderColor: 'blue',
    color: 'black',
    fontSize: 20,
    textAlign: 'center', // Centra el texto horizontalmente
    fontWeight: 'bold'
  },
});
