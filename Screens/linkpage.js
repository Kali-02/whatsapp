import { StyleSheet, Text, View, ImageBackground, Linking } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'


const Linkpage = () => {
    const String = "https://call.whatsapp.com/video/jqCsqwSAdqouaRDvHnLXqV"

    const str = `Anyone with Whatsapp can use this link to join this call.Only share it with people you trust`
    return (
        <View style={{ backgroundColor: "#121b22", flex: 1 }}>
            <View>
                <Text style={{ color: "white", fontSize: 18, marginTop: 10, padding: 6, fontWeight: "300" }}>{str}</Text>
            </View>
            <View style={{ padding: 6, marginLeft: 10, flexDirection: "row" }}>
                <View style={{ backgroundColor: "#00a884", borderRadius: 20, width: 40, padding: 8, marginTop: 10 }}>
                    <Icon name='videocam' size={25} color="white" />
                </View>
                <View style={{ marginTop: "2%", marginLeft: "4%" }}>
                    <Text onPress={() => Linking.openURL(String)} style={{ color: "#5fb9e2", fontSize: 16 }}>{String}</Text>
                </View>

            </View>
            <View style={{ padding: 30, marginLeft: "10%" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                    Call Type
                </Text >
                <Text style={{ color: "#65747e" }}>
                    Video
                </Text>
            </View>
            <View style={{ flexDirection: "row",padding:10 }}>
                <Icon name='arrow-redo-sharp' size={25} color="#65747e" />
                <Text style={{ color: "white",marginLeft:"10%",fontSize:20,fontWeight:"300" }}>
                    Send link via Whatsapp
                </Text>
            </View>
            <View style={{ flexDirection: "row",padding:10  }}>
                <Icon name='copy-outline' size={25} color="#65747e" />
                <Text style={{ color: "white",marginLeft:"10%",fontSize:20,fontWeight:"300"  }}>
                    Copy Link
                </Text>
            </View>
            <View style={{ flexDirection: "row",padding:10  }}>
                <Icon name='share-social' size={25} color="#65747e" />
                <Text style={{ color: "white",marginLeft:"10%",fontSize:20,fontWeight:"300"  }}>
                    Share link
                </Text>
            </View>
        </View>
    )
}

export default Linkpage

const styles = StyleSheet.create({})