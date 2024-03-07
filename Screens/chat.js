import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar, SearchBar, Overlay, SpeedDial, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import UserContext from '../Context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const HomeScreen = () => {
  const [search, setSearch] = useState("")
  const navigation = useNavigation()
  const { chat, setChat } = useContext(UserContext)
  const image = require("../assests/background.jpg")
  const [visible, setVisible] = useState(false);
  const [isvisbile, setIsvisible] = useState(false)
  const { select, setSelect, calls, setCalls } = useContext(UserContext)
  const [open, setOpen] = useState(false)

  const underlay = () => {
    setIsvisible(!isvisbile)
    console.log(isvisbile);
  }
  const onAddhandler = (res) => {
    setIsvisible(!isvisbile)
    setSelect(res)
  }
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleUnderlay = () => {
    setVisible(!visible);
  };
  const onCallHandler = () => {
    navigation.navigate("Calling", { select })
    setCalls(prev => [...prev, select])
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#121b22"
        barStyle="light-content"
      />
      <ImageBackground source={require("../assests/bg1.jpg")}>
        <ScrollView>
          <Icon name='search' size={25} color="white" onPress={toggleOverlay} style={{ marginLeft: "2%", marginTop: "1%" }} />
          <Overlay visible={visible} onBackdropPress={toggleUnderlay}
            overlayStyle={{ backgroundColor: null, width: "100%", top: "-34%", marginRight: "8%", borderTopWidth: 0, shadowColor: "transparent" }}
            backdropStyle={{ backgroundColor: "transparent" }} style={{ width: "100%" }}>
            <SearchBar value={search} containerStyle={{ backgroundColor: "transparent", borderColor: "transparent", borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }} inputContainerStyle={{ height: 19, width: "108%", borderColor: "transparent", borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }} onChangeText={(e) => setSearch(e)} />
          </Overlay>

          <View style={styles.v1}>
            {
              chat?.map((res, i) => {
                let searchval = search.toLowerCase().replace(/\s/, "")
                let outval = res.name.toLowerCase().replace(/\s/, "")
                if (outval.includes(searchval)) {
                  return (
                    <View style={styles.vflex} key={i}>

                      {/* <View style={{ flexDirection: 'row', marginTop: 10 }}> */}
                      <View>
                        <Overlay visible={isvisbile} onBackdropPress={underlay} overlayStyle={{ backgroundColor: "transparent", shadowColor: "transparent", marginBottom: "40%" }} backdropStyle={{ backgroundColor: "rgba(0 , 0, 0,0.07)" }} >
                          <Avatar
                            source={select.image}
                            avatarStyle={{ borderColor: "rgba(255 , 255, 255,0.3)", borderWidth: 5 }}
                            size={250}
                          />
                          <View style={{ flexDirection: "row", backgroundColor: "rgba(255 , 255, 255,0.6)", borderColor: "rgba(255 , 255, 255,0.3)" }}>
                            <Icon name="chatbox-outline" size={30} color="black" style={{ paddingLeft: "1%" }} onPress={() => navigation.navigate("Inside", { res })} />
                            <Icon name="call-outline" size={30} color="black" style={{ paddingLeft: "10%" }} onPress={onCallHandler} />
                            <Icon name="ios-videocam-outline" size={30} color="black" style={{ paddingLeft: "10%" }} />
                            <Icon name="information-circle-outline" size={30} color="black" style={{ paddingLeft: "14%" }} onPress={() => { navigation.navigate("Info", { select }); setIsvisible(!isvisbile) }} />
                            {/* <Icon name='home' size={30} color="black" onPress={()=>navigation.navigate("New")} /> */}
                          </View>
                        </Overlay>

                        <View style={{ marginRight: 20, marginLeft: 10 }}>
                          <Avatar
                            source={res.image}
                            rounded
                            size={50}
                            key={i}
                            onPress={() => onAddhandler(res)}
                          />

                          {console.log(res)}
                        </View>
                      </View>

                      <View style={{ width: "100%" }}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Inside", { res })} style={{
                          width: "100%",
                        }}>
                          <View style={{ width: "100%", height: 70 }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>{res.name} </Text>
                          </View>
                        </TouchableWithoutFeedback>

                      </View>


                    </View>

                  )
                }
              })
            }
          </View>

        </ScrollView>
        <SpeedDial
          overlayColor='transparent'
          color='#00a884'
          
          isOpen={open}
          icon={{ name: 'chat', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
        >
          <SpeedDial.Action
            color='#00a884'
            icon={<Icon name='people' color="white" size={20} />}
            titleStyle={{ backgroundColor: "rgba(255 , 255, 255,0.3)", color: "white", borderRadius: 20 }}
            title="New group"
            onPress={() => navigation.navigate("Newgroup")}
          />
          <SpeedDial.Action
            color='#00a884'
            icon={<Icon name='person-add' color="white" size={20} />}
            titleStyle={{ backgroundColor: "rgba(255 , 255, 255,0.3)", color: "white", borderRadius: 20 }}
            title="New contact"

          />

        </SpeedDial>
      </ImageBackground>

    </View>


  )
}
export default HomeScreen
const styles = StyleSheet.create({
  vflex: {
    flexDirection: "column", flexDirection: 'row', marginTop: 10,
  }
})

