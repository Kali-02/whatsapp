import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const LoadScreen = () => {
  return (
    <View>
        <Image style={{height:"100%",width:"100%"}} source={require("../assests/wlogo.jpg") } />
        <Icon name='logo-whatsapp' size={130} color="white" style={{position:"absolute",alignSelf:"center",marginTop:110}}/>
    </View>
  )
}

export default LoadScreen




