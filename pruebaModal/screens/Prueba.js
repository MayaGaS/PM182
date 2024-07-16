import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';

// son para implementar modales deslizantes 
import { FontAwesome5 } from '@expo/vector-icons';
import {
    BottomSheetModalProvider,
    BottomSheetModal
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window") // se obtienen las dimensiones de la ventana actual

export default function Prueba() {
    const [modal, setModal] = useState(false); //estado modal y funcion modal para actualizar el estado

    const sheetModal = useRef(null); // se declara una referencia

    // se define la funcion 'hey'
    const hey = () => {
        sheetModal?.current?.present()
    }

    const snapPoints = [width*0.3, width*0.5, width*0.9] // se decalara snapPoints contine los puntos de quiebre 

    return (
        // comienzo del retorno del componente 'Prueba'
        <GestureHandlerRootView style={{ flex: 1}}>
        <BottomSheetModalProvider>

            {/* se declara BottomSheetModal, se le asigna un nombre referenciado con sheetModal y con los puntos de quiebre */}
            <BottomSheetModal
            name="maya"
            ref={sheetModal}
            snapPoints={snapPoints}
        >
            {/* dentro del BottomSheetModal se define un view que contiene un text con el contenido  */} 
            <View
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Contenido del BottomSheet</Text>
                
            </View>
        </BottomSheetModal>

            {/* este view contiene un TouchableOpacity, donde manda llamar la funion 'hey' y muesta el BottomSheetModal */}
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => hey()}
                style={{
                    width: width *0.3,
                    height: height * 0.3,
                    backgroundColor: "#ffff",
                }}>
                    <Text>Hola</Text>
                </TouchableOpacity>
            </View>

        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}