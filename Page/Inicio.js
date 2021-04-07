import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import ListaTargeta from "../Componente/ListaTragetas"
import Logo from "../assets/Logo.png"
const Inicio = () => {
    return (
        <View style={{ backgroundColor: "#18191A", flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.linea} />
                <TouchableOpacity>
                    <Image style={{ width: 120, height: 120 }} source={Logo} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={{ color: "white", fontSize: 20 }}> Servicios </Text>
            </View>
            <View style={styles.linea} />
            <ListaTargeta />
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
    linea: {
        height: 13,
        backgroundColor: "#767676"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:50
    },

})

export default Inicio