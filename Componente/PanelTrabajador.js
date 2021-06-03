import React,{useState}  from "react"
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native"



import Estrellas from "../Componente/Estrellas"

const ChatPanel = ({nombre, imagen, calificacion, navigation}) =>{

    return(
        <View style={{borderBottomWidth:3, borderBottomColor:"#767676"}}>
            <TouchableOpacity onPress={
                ()=>{
                    navigation.navigate('Perfil_Trabajador');
                }
            } style={{margin:12,flexDirection:"row"}}>
                <Image source={imagen} style={{width:50, height:50, borderRadius:100}} />
                <View style={{justifyContent:"center", marginHorizontal:10, justifyContent:"space-around"}}>
                    <Text style={{color:"white"}}>
                        {nombre}
                    </Text>
                    <Estrellas numero={calificacion} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ChatPanel

const styles = StyleSheet.create({

})