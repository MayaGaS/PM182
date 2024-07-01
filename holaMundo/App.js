// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Dimensions, FlatList, SectionList, ActivityIndicator } from 'react-native';
import React,{useState, useEffect} from 'react'; //Importacion para hacer usos de datos
// useEffect: extrae datos, pero no se los queda todos



//Funciones 
/* const Texto=({estilo})=>{ // Parametros en este caso estilos que estilo
  const[contenido, setContenido] = useState('holaMundo') // Variable de contenido (propiedad children), se u
  const actualizarContenido=()=>{ // Array function que va a permitir hacer esa actualizacion
    setContenido('State actualizó este texto')} 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) // Mandar llamar el evento 
  // con 'style' especificamos la copnexión que está en styles, y colocamos el estilo de texto y estilo
} */

//Existen componentes, area donde se va a ejecutar
export default function App() {
  const [user, setUser]= useState([]) // define la asiganación de los usuarios 
  const [loading, setLoading]= useState(true) // denifinir los estados de carga

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data=> {setUser(data); setLoading(false)}) // le pasamos los datos, y se los pasanos a setUser
  },[])

  // solo si es true, va a cargar
  if(loading){
    return <View style={styles.center}>
        <ActivityIndicator size='large' color='blue'/>
          <Text> Cargando </Text>
    </View>
  }

  return (

    <View style={styles.container}>

      <FlatList 
      data={user}
      renderItem={({item})=><Text style={styles.item}> {item.name} {item.username} {item.address_city} </Text>} // Itera los datos que estan en la lista
      />
      <StatusBar style="auto" />
    </View>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //La forma en la que se acomoda el texto ("orden")
    backgroundColor: '#fff',
    alignItems: 'strech', // alinea el orden de izquierda a derecha
    justifyContent: 'center', // orden de arriba a abajo
    paddingTop: 50
  },

  item:{
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1
  },

  center:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});


/* const Boton=()=>{ // Parametros 
  const[contenido, setContenido] = useState('Presioname') // Variable de contenido (propiedad children), se u 
  const actualizarContenido=()=>{// Array function que va a permitir hacer esa actualizacion 
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) // Mandar llamar el evento 
} */