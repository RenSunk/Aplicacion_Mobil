import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"

const PanelChatUsuario = ({texto, imagen, nombre}) =>{

    if(nombre == undefined){
        return (
            <View style={{flexDirection:"row", margin:10, justifyContent:"flex-end" }}>
                <View style={{borderWidth:2, borderColor:"#767676", borderRadius:10, marginHorizontal:10}}>
                    <Text allowFontScaling={false} style={{color:"white", padding:5}}> {texto} </Text>
                </View>
                <Image source={imagen} style={{width:40, height:40, borderRadius:100}} />
            </View>
        )
    }

    return (
        <View style={{flexDirection:"row",margin:10, justifyContent:"flex-end"}}>

            <View style={{borderWidth:2, borderColor:"#767676", borderRadius:5,marginHorizontal:5}}>
                <Text style={{color:"white", padding:3}} > {nombre} </Text>
                <View style={{borderTopColor:"#767676", borderWidth:2}}>
                    <Text allowFontScaling={false} style={{color:"white", padding:5}}> {texto} </Text>
                </View> 
            </View>
            <Image source={imagen} style={{width:40, height:40, borderRadius:100}} />
        </View>
    )
}

export default PanelChatUsuario