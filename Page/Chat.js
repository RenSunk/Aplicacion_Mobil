import React,{useEffect}  from "react"
import { View,Text, StyleSheet, Image } from "react-native"
import tuque from "../assets/tuque.jpg"
import yo from "../assets/yo.jpg"
import ChatPanel from "../Componente/ChatPanel"

import DataContext from "../Context/Context"
import { useContext } from "react"

import { useIsFocused } from '@react-navigation/native';

const Chat = ({navigation}) =>{
    const isFocused = useIsFocused();
    const {data, setdata} = useContext(DataContext)

    useEffect(()=>{
        if(isFocused){
            setdata("Chat")
        }
    },[isFocused])

    return(
        <View style={ { backgroundColor:"#18191A",flex:1 } }>

            <View style={{  alignItems:"center", marginVertical:10, marginVertical:40  }}>
                <Text style={styles.texto}>
                    Chat Recientes
                </Text>
            </View>


            <View style={styles.panel}>

                <ChatPanel 
                    nombre={"Juan Sebastian Tuquerres Muñoz"} 
                    imagen={tuque} 
                    ultimo_mensaje={"listo vale muchas gracias, puedes ..."} 
                />

                <ChatPanel 
                    nombre={"Juan Sebastian Tuquerres Muñoz"} 
                    imagen={tuque} 
                    ultimo_mensaje={"listo vale muchas gracias, puedes ..."} 
                />
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    texto:{
        color:"white",
        fontSize:20,
        
    },
    panel:{ 
        borderWidth:3, 
        borderColor:"#767676", 
        flex:1, 
        marginBottom:40, 
        marginHorizontal:30, 
        borderRadius:20 
    },
    textoT:{
        color:"#C4C4C4",
        fontSize:15,
        marginTop:5
    },
    textoC:{
        color:"white",
        fontSize:15,
        
    },
    imagen:{
        width:50, 
        height:50, 
        borderRadius:100, 
        margin:15
    },

})

export default Chat