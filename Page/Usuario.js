import React, { useEffect } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

import DataContext from "../Context/Context"
import { useContext } from "react"

import yo from "../assets/yo.jpg"

import { useIsFocused } from '@react-navigation/native';

const Usuario = ({ navigation }) => {
    const isFocused = useIsFocused();
    const { data, setdata } = useContext(DataContext)

    useEffect(() => {
        if (isFocused) {
            setdata("Usuario")
        }
    }, [isFocused])


    return (
        <View style={{ flex: 1, backgroundColor: "#18191A" }}>
            <View style={{
                flex:2,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image 
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100
                }}
                source={yo} />
            </View>
            <View style={{
                flex: 4,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={styles.panel_info}>
                    <Text style={styles.texto}>
                        Nombre: Kevin Rodrigo
                    </Text>
                    <View style={styles.linea} />
                    <Text style={styles.texto}>
                        Apellido: Guerrero Posso
                    </Text>
                    <View style={styles.linea} />
                    <Text style={styles.texto}>
                        Tipo de cuenta: Consumidor / Usuario
                    </Text>
                    <View style={styles.linea} />
                    <Text style={styles.texto}>
                        Email: kevin.guerrero01@usc.edu.co
                    </Text>
                    <View style={styles.linea} />
                    <Text style={styles.texto}>
                        Direccion: Cra 28D  #72M 53
                    </Text>
                </View>
            </View>
            <View style={{
                backgroundColor: "#18191A",
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: "5%",
                marginHorizontal: "5%"
            }} >
                <TouchableOpacity style={styles.boton} >
                    <Text style={styles.texto}>Salir de la cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.texto}> Editar Cuenta </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagen_perfil: {

        borderRadius: 100,
        margin: 15
    },
    texto: {
        color: "white",
        fontSize: 15,
        paddingHorizontal: 6,
        paddingVertical: 15
    },
    linea: {
        height: 3,
        backgroundColor: "#767676"
    },
    panel_info: {

        borderColor: "#767676",
        borderWidth: 3,
        borderRadius: 20,
        width: "90%",
    },
    boton: {
        borderWidth: 3,
        borderColor: "#767676",
        borderRadius: 20
    }
})

export default Usuario