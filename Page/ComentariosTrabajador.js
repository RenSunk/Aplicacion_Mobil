import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"
import Estrella from "../assets/Estrella.png"
import Flecha from "../assets/Flecha.png"
import PanelChatUsuario from "../Componente/PanelChatUsuario"
import PanelChatTrabajador from "../Componente/PanelChatTrabajador"
import tuque from "../assets/tuque.jpg"
import yo from "../assets/yo.jpg"

const ComentariosTrabajador = () => {
    return (
        <View style={{ backgroundColor: "#18191A", flex: 1 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginHorizontal: 5 }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Perfil_Trabajador');
                }} style={{ flexDirection: "row", borderColor: "#767676", borderWidth: 2.5, borderRadius: 100, justifyContent: "center", alignItems: "center", marginVertical: 10, paddingHorizontal: 7, paddingVertical: 10 }}>
                    <Text allowFontScaling={false} style={{ color: "white" }}>
                        Juan Sebastian Tuquerres Muñoz
    </Text>

                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <TouchableOpacity style={{ marginHorizontal: 10 }}>
                        <Image style={{ width: 25, height: 25 }} source={Estrella} />
                    </TouchableOpacity>


                    <TouchableOpacity >
                        <Text style={{ color: "red", fontSize: 25 }} allowFontScaling={false}> ! </Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ flex: 5,borderWidth:3, borderColor:"#767676", margin:15, borderRadius:15 }}>
                <View >

                    <PanelChatUsuario 
                        texto={"como tas ?"} 
                        imagen={yo}  
                        nombre={"Kevin Rodrigo Guerrero Posso"}
                    />

                </View>

            </View>
            <View style={{ flex: 0.8, justifyContent: "center", }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%" }}>

                    <TextInput style={{ width: "80%", borderWidth: 2, borderColor: "#767676", color: "white", padding: 5, borderRadius: 10 }} />

                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "#767676", borderRadius: 10, width: "15%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }} allowFontScaling={false}>
                            Enviar
        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

export default ComentariosTrabajador