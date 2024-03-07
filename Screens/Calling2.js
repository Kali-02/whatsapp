import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Drafts from '../Draft'
import UserContext from '../Context'

const Calling2 = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [focused, setFocused] = useState(false)
    const [vfocused, setVfocused] = useState(false)
    const [micfocused, setMicfocused] = useState(false)
    const { select, setSelect } = useContext(UserContext)
    const AddHandler = (item) => {
        item === 'volume' ? setFocused(!focused) :
            item === 'video' ? setVfocused(!vfocused) :
                setMicfocused(!micfocused)

    }

    const { res } = route.params


    return (
        <View>
            <ImageBackground source={require("../assests/insidebg.jpg")} style={{ height: "100%" }}>
                <View style={{ alignSelf: "center", marginTop: "15%" }} >
                    <Avatar source={res.image} size={110} rounded avatarStyle={{}} />
                    <Text style={{ alignSelf: "center", fontSize: 25, color: "white" }}>{res.name}</Text>
                    <Drafts />
                </View>
                <View style={{ marginTop: "113%", backgroundColor: "#121b22", height: "10%", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", }}>
                        <Icon name={focused ? "volume-off" : "volume-high"} size={30} color="white" style={{ marginLeft: 15 }} onPress={() => AddHandler('volume')} />
                        <Icon name={vfocused ? 'video' : "video-off"} size={30} color="white" style={{ marginLeft: "25%" }} onPress={() => AddHandler("video")} />
                        <Icon name={micfocused ? "microphone-off" : 'microphone'} size={30} color="white" style={{ marginLeft: "28%" }} onPress={AddHandler} />
                    </View>
                    <View style={{ backgroundColor: "red", borderRadius: 500, height: 50, width: 50, alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <Icon name='phone-hangup' size={30} color="white" style={{}} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Calling2

