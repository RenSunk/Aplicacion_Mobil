import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import Navigation from "./Componente/Navigation"
import Inicio from "./Page/Inicio"
import Usuario from "./Page/Usuario"
import Chat from "./Page/Chat"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const ref = React.useRef(null);

  return (
    <View style={styles.contenedor} >

    <NavigationContainer ref={ref}  >

      <MyStack/>

      <Navigation r={ref} />

    </NavigationContainer>

    
    
    
    </View>
  )
}

/*

*/

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Usuario" component={Usuario} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#18191A",
  },
  textos: {
    color: "#fff",
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 30
  },
  barra: {
    backgroundColor: "#767676",
    height: 30
  },
  linea:{
    height:13,
    backgroundColor:"#767676"
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },

})

export default App