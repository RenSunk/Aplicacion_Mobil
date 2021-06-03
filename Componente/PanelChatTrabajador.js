import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"

const PanelChatTrabajador = ({texto, imagen}) => {
    return (
        <View style={{ flexDirection: "row", margin: 10}}>
            <Image source={imagen} style={{ width: 40, height: 40, borderRadius: 100 }} />
            <View style={{ borderWidth: 2, borderColor: "#767676", borderRadius: 10, marginHorizontal: 10, alignItems: "flex-end" }}>
                <Text allowFontScaling={false} style={{ color: "white", padding: 5 }}> {texto} </Text>
            </View>
            
        </View>
    )
}

export default PanelChatTrabajador