import React  from "react"
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const ChatPanel = ({nombre, imagen, ultimo_mensaje}) =>{

    return (
        <View style={{borderBottomWidth:3, borderColor:"#767676"}}>
            <TouchableOpacity style={{flexDirection:"row"}} >
                <Image style={styles.imagen} source={imagen} />
                <View style={{ justifyContent:"center", flex:1 }}>
                    <Text style={styles.textoC} minimumFontScale={0.1}>
                        {nombre}
                    </Text>
                    <Text style={styles.textoT}>
                        {ultimo_mensaje}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ChatPanel

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