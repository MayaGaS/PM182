import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al presionar el botón de guardar
  const guardar = () => {
    alert(`Nombre: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu nombre'
              onChangeText={setName}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu email'
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu contraseña'
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={guardar}>
            <Text style={styles.buttonText}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    color: 'green',
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
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
