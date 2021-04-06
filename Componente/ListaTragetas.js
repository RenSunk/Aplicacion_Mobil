import React, { useState, useEffect } from "react"
import { View, StyleSheet, ScrollView, Text } from "react-native"
import Targeta from "./Targeta"
import IconTools from "../assets/IconTools.png"

import IconoComputador from "../assets/Icono_Computador.png"
import IconoLlave from "../assets/Icono_Llave.png"

import IconoSanitario from "../assets/Icono_Sanitario.png"
import IconoElectricidad from "../assets/Icono_Electricidad.png"

import IconoPintura from "../assets/Icono_Pintura.png"
import IconoEscoba from "../assets/Icono_Escoba.png"

const ListaTargeta = () => {

    return (

        <ScrollView>

            <View style={styles.filas}>
                <Targeta servicio={"Tecnicos de computadores"} imagenes={IconoComputador} />
                <Targeta servicio={"Cerrajeros"} imagenes={IconoLlave} />
            </View>

            <View style={styles.filas}>
                <Targeta servicio={"Plomeros"} imagenes={IconoSanitario} />
                <Targeta servicio={"Electricistas"} imagenes={IconoElectricidad} />
            </View>
            <View style={styles.filas}>
                <Targeta servicio={"Pintores"} imagenes={IconoPintura} />
                <Targeta servicio={"Aseadores"} imagenes={IconoEscoba} />
            </View>

        </ScrollView>



    )
}

const styles = StyleSheet.create({

    filas: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    columnas: {
        flex: 5
    }

})

export default ListaTargeta