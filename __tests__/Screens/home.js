
import React from "react";
import { View,Button,Image } from "react-native";

const home = ({navigation}) =>{
    const onPressHandler = ()=>{
        navigation.navigate("Info")
    }
    return(
        <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Button title="click" onPress={onPressHandler}>
            <Image source={require("E:\reactnative\google\images")}></Image>
            </Button>
        </View>
    )
}
export default home;