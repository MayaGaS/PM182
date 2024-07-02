import { StatusBar } from 'expo-status-bar'; // Importa el componente de barra de estado de Expo
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native'; // Importa varios componentes de React Native
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado

export default function App() {
  const [titulo, setTitulo] = useState(''); // Declara el estado 'titulo' y su función de actualización 'setTitulo'
  const [peliculas, setPeliculas] = useState([ // Declara el estado 'peliculas' y su función de actualización 'setPeliculas'
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
    if (titulo.trim() === '') { // Verifica si el campo de búsqueda está vacío o contiene solo espacios en blanco
      // Mostrar toda la lista si no hay texto en el campo de búsqueda
      setPeliculas([ // Restablece la lista completa de películas
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
        pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) // Filtra películas que coinciden con el título ingresado (ignorando mayúsculas y minúsculas)
      );
      setPeliculas(resultados); // Actualiza el estado 'peliculas' con los resultados de la búsqueda
      if (resultados.length === 0) { // Si no se encuentran coincidencias
        Alert.alert('Sin Resultados', `No se encontraron películas con el título "${titulo}"`); // Muestra una alerta indicando que no se encontraron resultados
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/4.jpg')} style={styles.background}> {/* Renderiza un fondo de imagen */}
      <ScrollView contentContainerStyle={styles.scrollContainer}> {/* Permite el desplazamiento del contenido */}
        <Text style={styles.titulo}>Buscador de Películas</Text> {/* Renderiza el título de la aplicación */}

        {/* Card de búsqueda */}
        <View style={styles.card}>
          <TextInput
            style={styles.textInput}
            placeholder='Ingresa el Título de la Película'
            onChangeText={setTitulo}
            value={titulo}
          /> {/* Campo de entrada de texto para el título de la película */}
          <TouchableOpacity style={styles.button} onPress={buscar}>
            <Text style={styles.buttonText}>BUSCAR</Text>
          </TouchableOpacity> {/* Botón de búsqueda */}
        </View>

        {/* Card de resultados */}
        <View style={styles.card}>
          <View style={styles.listaContainer}>
            {peliculas.map((pelicula, index) => (
              <Text key={pelicula.key} style={styles.item}>{pelicula.titulo}</Text>
            ))} {/* Lista de resultados de búsqueda */}
          </View>
        </View>

      </ScrollView>
      <StatusBar style="auto" /> {/* Configuración de la barra de estado */}
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5, 
    marginTop: 20, 
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
    marginBottom: 20, 
  },
  item: {
    padding: 10, 
    borderColor: 'blue', 
    color: 'black', 
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold' 
  },
});
