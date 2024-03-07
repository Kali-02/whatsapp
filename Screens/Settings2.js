import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'

const ModalPage = (props) => {
  const img = require("../assests/background.jpg")
  return (
    <View style={{}}>
      <View style={{ flexDirection: "row", backgroundColor: "#3d8c4c",height:"30%",alignItems:"center" }}>
        <Icon name='arrow-back' size={30} color="white" onPress={props.onClose} />
        <Text style={{ marginLeft: "5%", fontSize: 30, fontWeight: "900",color:"white" }} >Account</Text>
      </View>
      
      <View>
        <Text style={styles.txt1}>{props?.item.text}</Text>
      </View>

      
    </View>

  )
}

const Settings2 = ({ route, navigation }) => {
  const item1 = [
    {
      iconName: "shield-checkmark-sharp",
      text: "Security notification",
    },
    {
      iconName: "ios-reorder-two",
      text: "Two-Step verification",
    },
    {
      iconName: "log-out-outline",
      text: "Change number",
    },
    {
      iconName: "document-text-outline",
      text: "Request account info",
    },
    {
      iconName: "trash-outline",
      text: "Delete my account",
    }
  ]

  const [visible, setVisible] = useState(false);
  const item = route.params
  const img = require("../assests/background.jpg")
  const [select, setSelect] = useState()

  
  return (
    <ImageBackground source={img} style={{ flex: 1 }}>
      <View style={styles.Header}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Icon name='chevron-back-circle-outline' size={30} color="white" style={{}} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.h1}>
            <Icon name={item?.iconName} style={styles.i1} size={40} />
            <Text style={styles.t1}>{item.title}</Text>
          </View>
        </View>


      </View>
      {
        item1.map((res, i) => (
          <View  key={i}>
            <TouchableOpacity style={{ flexDirection: "row", padding: "5%" }} onPress={() => {setSelect(res), setVisible(true)}}>
              <Icon name={res.iconName} size={30} color="white" />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", paddingLeft: "5%" }}>{res.text}</Text>
              <Modal visible={visible} >
                <ModalPage  onClose={() => setVisible(false)} item={select} />
              </Modal>
            </TouchableOpacity>
          </View>
        ))
      }
    </ImageBackground>
  )
}

export default Settings2

const styles = StyleSheet.create({
  Header:
  {
    height: "10%",
    width: "100%",
    flexWrap: "nowrap",
    bordercolor: "grey",
    borderBottomWidth: 2,
    elevation: 20,
    justifyContent: "center"

  },
  t1:
  {
    fontSize: 40,
    color: "white"
  },
  i1:
  {
    color: "white",
    marginTop: "2%",
  },
  h1: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2%"
  },
  txt1: {
    fontSize: 30,
    alignSelf: "center"
  }
})