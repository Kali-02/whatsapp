import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import UserContext from '../Context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const SettingsScreen = () => {
  const navigation = useNavigation()
  const { chat1, setChat1 } = useContext(UserContext)
  const [mystatus, setmyStatus] = useState(
    { name: "MyStatus", image: require("../assests/vijay.jpg") },

  )
  const image = require("../assests/background.jpg")
  return (
    <View style={{ backgroundColor: "#121b22", height: "100%" }}>
      <ScrollView>


        <View style={styles.v1}>

          <View >
            <TouchableOpacity onPress={() => navigation.navigate("New", { mystatus })}>
              <View style={{ flexDirection: 'row', marginTop: 10, padding: 10, marginLeft: "1%" }} >
                <View style={{ marginRight: 20, }}>
                  <Avatar
                    source={mystatus.image}
                    rounded
                    size={50}
                  />
                </View>
                <View >
                  <Text style={{ color: 'white', fontSize: 20 }}>{mystatus?.name} </Text>
                  <Text style={{ color: "#65747e", fontWeight: "700" }}>Tap to add status updates</Text>
                </View>
                <View style={{ marginLeft: "28%" }}>
                  <TouchableOpacity onPress={()=>navigation.navigate("Viewstatus")}>
                    <Icon name='ellipsis-horizontal' size={25} color="#65747e"  />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 5, marginLeft: "3%" }}>
            <Text style={{ color: "#65747e", fontWeight: "700" }}>Recent Updates</Text>
          </View>

          {
            chat1?.map((res, i) => (
              <View style={styles.vflex} key={i}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Inside", { res })}>
                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: "2%" }}>
                    <View style={{ marginRight: 20, }}>
                      <Avatar
                        source={res?.image}
                        rounded
                        size={50}
                        key={i}
                      />
                    </View>
                    <View >
                      <Text style={{ color: 'white', fontSize: 20 }}>{res?.name} </Text>
                    </View>

                  </View>
                </TouchableWithoutFeedback>
              </View>


            ))
          }
        </View></ScrollView>
    </View>
  )
}
export default SettingsScreen
const styles = StyleSheet.create({
  vflex: {
    flexDirection: "column",
    padding: 10
  },
  v1: {
    // marginLeft:"1%"
  }
})