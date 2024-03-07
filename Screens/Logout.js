import { StyleSheet, Text, View, ImageBackground, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { ThemeConsumer } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Logout = () => {
  const navigation = useNavigation()
  const clear = async()=> {
    await AsyncStorage.clear()
    navigation.navigate('Form')
  }
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assests/background.jpg')} style={{ height: "100%" }}>
              <Icon name='arrow-back' size={35} color='white' onPress={() => navigation.goBack()} />
              <View style={{ alignSelf: "center" }}>
                <Icon name='logo-whatsapp' size={100} color='white' />
                </View>
                <View style={{flexDirection:'row',alignSelf:"center"}}>
                  <Icon name='log-out' size={30} color='white'/>
                <Text style={theme.Logstyles.text} onPress={clear}>Logout</Text>
                </View>
             
            </ImageBackground>
          </View >
        )
      }
    </ThemeConsumer>
  )
}

export default Logout

