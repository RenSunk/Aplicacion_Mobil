import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import Navigation from "./Componente/Navigation"
import ListaTargeta from "./Componente/ListaTragetas"

const App = () => {
  return (
    <View style={styles.contenedor} >
      
      <View style={styles.container}>

        <Text style={{color:"white", fontSize:20}}> Servicios </Text>
      </View>

      <View style={ styles.linea} />

      <ListaTargeta />

      <Navigation />

    </View>
  )
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