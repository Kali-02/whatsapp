import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const About = ({ navigation }) => {
    const img = require("../whatsapp/assests/background.jpg")
    return (
        <ImageBackground source={img} style={{ height: "100%" }}>
            <ScrollView>
            <Icon name='arrow-back' size={30} color="white" onPress={() => navigation.navigate("Whatsapp")} />
            <View style={{ alignItems: "center", }}>
                <Icon name='logo-whatsapp' size={100} color="white" />
                <Text style={styles.t1} >About</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.t2} onPress={() => navigation.navigate("Logout")} >whatsapp</Text>
                    <Icon name='arrow-back' size={30} color="white" style={{marginTop:10}}/>
                    <Text style={{ color: "white" ,marginTop:15,fontWeight:"bold",fontSize:16}}> LOGOUT </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.t3}> from </Text>
                    <Text style={styles.t5}>KALI</Text>
                </View>
                <View style={{marginHorizontal:"2%" }}>
                    <Text style={{ color: "white", marginTop: 10,fontSize:20,paddingTop:"1%" }}>Our App More than 2 billion people in over 180 countries use WhatsApp1 to stay in touch with friends and family, anytime and anywhere. </Text>
                    <Text style={{ color: "white",fontSize:20 ,paddingTop:"1%" }}>WhatsApp is free2 and offers simple, secure, reliable messaging and calling, available on phones all over the world.</Text>
                    <Text style={{ color: "lightgreen",fontSize:20 ,paddingTop:"1%" }}>1 And yes, the name WhatsApp is a pun on the phrase What's Up.</Text>
                    <Text style={{ color: "lightgreen",fontSize:20,paddingTop:"1%"  }}>2 Data charges may apply.</Text>
                    <Text style={{ color: "white",fontSize:20 ,paddingTop:"1%" }}>Our Mission WhatsApp started as an alternative to SMS. </Text>
                    <Text style={{ color: "white",fontSize:20  ,paddingTop:"1%"}}> Our product now supports sending and receiving a variety of media: text, photos, videos, documents, and location, as well as voice calls. </Text>
                    <Text style={{ color: "white" ,fontSize:20,paddingTop:"1%" }}>Some of your most personal moments are shared with WhatsApp, which is why we built end-to-end encryption into our app.</Text>
                    <Text style={{ color: "white",fontSize:20 ,paddingTop:"1%" }}>Behind every product decision is our desire to let people communicate anywhere in the world without barriers.</Text>
                    <Text style={{ color: "white",fontSize:20 ,paddingTop:"1%" }}>Our Team WhatsApp was founded by Jan Koum and Brian Acton who had previously spent 20 years combined at Yahoo.</Text>
                    <Text style={{ color: "white" ,fontSize:20 ,paddingTop:"1%"}}>WhatsApp joined Facebook in 2014, but continues to operate as a separate app with a laser focus on building a messaging service that works fast and reliably anywhere in the world.</Text>
                </View>
            </View></ScrollView>
        </ImageBackground>
    )
}

export default About

const styles = StyleSheet.create({
    t1: {
        color: "white",
        fontSize: 30,
    },
    t2: {
        marginLeft:"20%",
        color: "black",
        fontSize: 30,
        backgroundColor: "lightgreen",
        borderRadius: 10,
        padding: "2%",
        borderColor: "black",
        borderWidth: 1
    },
    t3: {
        color: "white"
    },
    t4: {
        fontSize: 25,
        color: "white",
        textDecorationLine: "underline line-through"
    },
    t5: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: "underline"
    }
})