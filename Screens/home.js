
import React from "react";
import { View,Button,Image } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { StyleSheet } from "react-native";

const Home = () =>{
    const navigation=useNavigation()
    const onPressHandler = ()=>{
        navigation.navigate("Info")
    }
    return(
        <View style ={styles.style1}>
            <Button title="click" onPress={onPressHandler}>
           
            </Button>
        </View>
    )
}
const styles=StyleSheet.create({
    style1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"grey",
    }
})
export default Home;
