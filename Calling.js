import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Drafts from './Draft'

const Calling = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const[focused,setFocused] = useState(false)
    const[vfocused,setVfocused] = useState(false)
    const[micfocused,setMicfocused] = useState(false)
    const AddHandler =(item)=>{
        item==='volume'? setFocused(!focused):
        item==='video'?setVfocused(!vfocused):
        setMicfocused(!micfocused)

    }


    const { select } = route.params


    return (
        <View>
            <ImageBackground source={require("../whatsapp/assests/insidebg.jpg")} style={{ height: "100%" }}>

                <View style={{ alignSelf: "center", marginTop: "15%" }} >
                    <Avatar source={select.image} size={110} rounded avatarStyle={{}} />

                    <Text style={{ alignSelf: "center", fontSize: 25, color: "white" }}>{select.name}</Text>
                    <Drafts/>
                </View>
                <View style={{ marginTop: "113%", backgroundColor: "#121b22", height: "10%", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", }}>
                        <Icon name={focused?"volume-off":"volume-high"}  size={30} color="white" style={{ marginLeft: 15 }} onPress={()=>AddHandler('volume')} />
                        <Icon name={vfocused?'video':"video-off"} size={30} color="white" style={{ marginLeft: "25%" }} onPress={()=>AddHandler("video")} />
                        <Icon name={micfocused?"microphone-off":'microphone'} size={30} color="white" style={{ marginLeft: "28%" }} onPress={AddHandler} />
                    </View>
                    <View style={{ backgroundColor: "red", borderRadius: 500, height: 50, width: 50, alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <Icon name='phone-hangup' size={30} color="white" style={{}} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Calling

const styles = StyleSheet.create({})