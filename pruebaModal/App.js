import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Prueba from './screens/Prueba';


export default function App() {

  return (
    
    <Prueba></Prueba>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding:10,
    fontSize:24,
    height:50,
    borderColor:'blue',
    borderBottomWidth:2,
  },
  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});