
import React from "react";
import { View,Button } from "react-native";

const Details = ({navigation}) =>{
    const onPressHandle = () =>{
        navigation.navigate("Home")
    }
    return(
        <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Button title="back" onPress={onPressHandle}/>
        </View>
    )
}
export default Details;