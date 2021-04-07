import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"


const Targeta = ({ servicio, imagenes }) => {

    return (

        <TouchableOpacity>
            <View style={styles.targeta}>
                <Image source={imagenes} style={styles.imagen} />
                <Text style={styles.texto}>
                    {servicio}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    imagen: {

        height: 40,
        width: 40
    },

    targeta: {
        flex:1,
        borderColor:"#767676",
        borderWidth:3,
        marginTop: 30,
        padding:17,
        width: 105,
        borderRadius: 25,
        alignItems: "center",

    },

    texto: {
        color: "#fff",
        fontSize:12,
        marginTop: 5,
        flex:1,
        textAlign:"center"
    },

})

export default Targeta