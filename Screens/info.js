
import React, { useState, useContext } from "react";
import { View, Text, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar, Overlay, Switch, } from "react-native-elements";
import { ThemeConsumer } from "react-native-elements";
import { useNavigation, useRoute } from '@react-navigation/native'
import UserContext from "../Context";
import Icon1 from "react-native-vector-icons/Entypo";


const Details = () => {
    const { select, setSelect } = useContext(UserContext)
    const navigation = useNavigation()
    const img = require("../assests/bg1.jpg")
    const route = useRoute()
    // const { select } = route.params
    const [visible, setVisible] = useState(false)
    const popUp = () => {
        setVisible(!visible)
    }
    const popDown = () => {
        setVisible(!visible)
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <ImageBackground source={img} style={{ height: "100%" }} >
                        <View style={{backgroundColor:"#0b141b",height:"100%"}} >
                            <View style={theme.infostyles.mainView}>
                                <Icon name="arrow-back" size={30} color="white" style={{}} onPress={() => navigation.goBack()} />
                                <Avatar rounded source={select.image} size={150} />
                                <Icon name="ellipsis-vertical-outline" size={40} color="white" onPress={popUp} />
                                <Overlay visible={visible} onBackdropPress={popDown} overlayStyle={theme.infostyles.overlay} backdropStyle={{ backgroundColor: null }} style={{ borderColor: "transparent" }} animationType="fade">
                                    <Text style={{ fontSize: 20, borderBottomColor: "black", borderBottomWidth: 2, backgroundColor: "white", padding: 4, borderRadius: 5,color:"black" }} onPress={() => { navigation.navigate("Edit") }} >Edit</Text>
                                </Overlay>
                            </View>
                            <View style={{ alignSelf: "center" }}>
                                <Text style={{ fontSize: 35, fontWeight: "bold", color: "white", }}>{select.name}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name="chatbox-outline" size={30} color="#2c9c65" style={{ paddingLeft: "15%" }} />
                                <Icon name="call-outline" size={30} color="#2c9c65" style={{ paddingLeft: "10%" }} />
                                <Icon name="ios-videocam-outline" size={30} color="#2c9c65" style={{ paddingLeft: "10%" }} />
                                <Icon name="information-circle-outline" size={30} color="#2c9c65" style={{ paddingLeft: "14%" }} />
                            </View>
                            <View style={{ backgroundColor: "#121b22", marginHorizontal: 5,marginTop:"3%" }}>
                                <Text style={{ color: "white", fontSize: 20, padding: 5 }}>{select.title}</Text>
                            </View>
                            <ScrollView style={{ marginTop: "2%" }}>
                                <View style={{ backgroundColor: "#121b22" }}>
                                    <View style={{ padding: 10, flexDirection: "row" }}>
                                        <Icon name="notifications" size={20} color="#8596a0" style={{ paddingTop: "2%", }} />
                                        <Text style={{ color: "#e9edf0", paddingTop: "2%", fontSize: 15, paddingLeft: "5%" }}>Mute notifications</Text>
                                        <Switch style={{ marginLeft: "40%", }} color="#8596a0" thumbColor="#8596a0" />
                                    </View>
                                    <View style={{ backgroundColor: "#121b22", padding: 10, flexDirection: "row", marginTop: "1%" }}>
                                        <Icon name="musical-note" size={20} color="#8596a0" style={{ paddingTop: "2%" }} />
                                        <Text style={{ color: "#e9edf0", paddingTop: "2%", fontSize: 15, paddingLeft: "5%" }}>Custome notifications</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#121b22", padding: 10, flexDirection: "row", marginTop: "1%" }}>
                                        <Icon name="file-tray-stacked-sharp" size={20} color="#8596a0" style={{ paddingTop: "2%" }} />
                                        <Text style={{ color: "#e9edf0", paddingTop: "2%", fontSize: 15, paddingLeft: "5%" }}>Media Visibility</Text>
                                    </View >
                                </View>
                                <View style={{ backgroundColor: "#121b22",marginTop:5 }}>
                                    <View style={{ padding: 10, flexDirection: "row", marginTop: "1%" }}>
                                        <Icon name="lock-closed" size={20} color="#8596a0" style={{ paddingTop: "2%" }} />
                                        <Text style={{ color: "#e9edf0", paddingTop: "2%", fontSize: 15, paddingLeft: "5%" }}>Encryption</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#121b22", padding: 10, flexDirection: "row", marginTop: "1%" }}>
                                        <Icon name="ios-timer-outline" size={20} color="#8596a0" style={{ paddingTop: "2%" }} />
                                        <Text style={{ color: "#e9edf0", paddingTop: "2%", fontSize: 15, paddingLeft: "5%" }}>Disappering Messages</Text>
                                    </View>
                                </View>

                                <View style={{ backgroundColor: "#121b22", marginTop: 5 }}>
                                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5,padding:10,alignItems:"center", }}>
                                        <Icon1 name="block" size={20} color="#eb5e6e" />
                                        <Text style={{ fontSize: 23, color: '#eb5e6e',fontWeight:"300",marginLeft:"11%" }}>
                                            Block {select.name}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 10,padding:10,alignItems:"center" }}>
                                        <Icon name="thumbs-down-sharp" size={25} color="#eb5e6e" />
                                        <Text style={{ fontSize: 23, color: "#eb5e6e", marginBottom: 5,fontWeight:"300",marginLeft:"10%" }}>
                                            Report {select.name}
                                        </Text>
                                    </View>

                                    {select?.grpMembers?.map(i =>{
                                        return(
                                            <>
                                            <Text>{i.name}</Text>
                                            <Text>{i.title}</Text>
                                            </>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </ImageBackground>

                )
            }
        </ThemeConsumer>
    )

}
export default Details;


