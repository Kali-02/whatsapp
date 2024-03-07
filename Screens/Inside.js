import { useState, useEffect, useContext } from 'react'
import { View, ImageBackground, TextInput, Alert, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Avatar, Text, ThemeConsumer, SpeedDial, Overlay, CheckBox } from 'react-native-elements'
import UserContext from '../Context'
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons'
import Enticon from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import EmojiBoard from 'react-native-emoji-board'




const textTruncate = (str, length, ending) => {

  if (length == null) {
    length = 7;
  }
  if (ending == null) {
    ending = '..';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  else {
    return str;
  }

};
const Inside = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const img = require("../assests/insidebg.jpg")
  const [message, setMessage] = useState("")
  const { chat, setChat, select, setSelect, } = useContext(UserContext)
  const data = `        Message and calls are end-to-end
encripted.No one outside of the chat, not even Whatsapp,can read or listen to them.
                        Tap to learn more.`
  const Block = `Blocked contacts cannot call or send 
you messages. This contact will not be 
notified.`
  const Report = `Report contact
The last 5 message will be
forwarded to WhatsApp.`
  const { res } = route.params
  const [visible, setVisible] = useState(false)
  const [BlockVisible, setBlockVisible] = useState(false)
  const [checkbox, setCheckBox] = useState(false)
  const [loading, setLoading] = useState(false)
  const [unBlock, setUnBlock] = useState(false)

  const pressHandler = () => {
    setVisible(!visible)
  }
  const onChangeHandler = (res) => {
    setSelect(res)
    navigation.navigate("Info", { select })
    setVisible(!visible)
  }
  const onBlockHandler = (res) => {
    if (res.block != true) {
      setBlockVisible(!BlockVisible)
      setVisible(!visible)
    }
    else {
      setUnBlock(!unBlock)
    }

  }
  const onCheckBox = () => {
    setCheckBox(!checkbox)
  }
  const onClickBlockHandler = (res) => {
    setBlockVisible(!BlockVisible)
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    res.block = true
  }
  const OnUnBlockHandler = (res) => {
    setUnBlock(!unBlock)
    res.block = false
  }
  const UnblockHandler = (res) => {
    setUnBlock(!unBlock)
    setVisible(false)
  }
  const onEditHandler = (res) => {
    setSelect(res)
    navigation.navigate("Edit", select)
  }

  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View>
            <StatusBar
              backgroundColor="#272e36"
              barStyle="light-content"
            />
            <ImageBackground source={img} style={theme.insideStyles.ImageBackground}>
              <View style={theme.insideStyles.imgContainer}>
                <Icon style={theme.insideStyles.Icon1} name='arrow-back' size={30} onPress={() => navigation.goBack()} />
                <Avatar rounded size={45} source={res.image} />
                <Text style={{ color: 'white', fontSize: 24, marginLeft: 9, fontWeight: "700" }}>{textTruncate(res.name)}</Text>
                <View style={{ marginLeft: "30%", flexDirection: "row", justifyContent: "space-between", width: "30%" }}>
                  <Icon name='videocam' style={{ color: "white", }} size={25} />
                  <Icon name='ios-call' style={{ color: "white", }} size={21} onPress={() => navigation.navigate("Calling2", { res })} />
                  <Icon name='ellipsis-vertical' style={{ color: "white" }} size={25} onPress={pressHandler} />
                </View>
              </View>
              <View style={{ flexDirection: "row", marginHorizontal: "12%", marginTop: "5%", backgroundColor: "#1c272d", borderRadius: 15 }}>
                <View style={{ marginHorizontal: "3%", flexDirection: "row", padding: 2 }}>
                  <Icon name='lock-closed' size={15} color='#f7d289' style={{ position: "absolute", marginLeft: "5%", marginTop: "1%" }} />
                  <Text style={{ color: "#f6d38c" }}>{data}</Text>
                </View>
              </View>
              <Overlay visible={visible} onBackdropPress={pressHandler} overlayStyle={{ backgroundColor: "#233239", marginBottom: "120%", zIndex: 0, marginLeft: "55%" }} backdropStyle={{ backgroundColor: "transparent" }} animationType="fade"    >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ padding: "2%", color: "#feffff" }} onPress={() => onChangeHandler(res)}>Contact Details</Text>
                  <Text style={{ padding: "2%", color: "#feffff" }} onPress={() => onBlockHandler(res)}>{res.block ? "UnBlock" : "Block"}</Text>
                  <Text style={{ padding: "2%", color: "#feffff" }}>Share</Text>
                  <Text style={{ padding: "2%", color: "#feffff" }} onPress={() => onEditHandler(res)}>Edit</Text>
                </View>
              </Overlay>

              <Overlay visible={loading} overlayStyle={{ backgroundColor: "#233239" }} >
                <View style={{ backgroundColor: "#233239", flexDirection: "row", padding: 5, alignItems: "center" }}>
                  <ActivityIndicator size={50} />
                  <Text style={{ color: "white", marginHorizontal: 15, fontSize: 15, fontWeight: "200" }}>Please Wait a Moment</Text>
                </View>
              </Overlay>

              <Overlay visible={unBlock} onBackdropPress={UnblockHandler} overlayStyle={{ backgroundColor: "#2a3b45" }} >
                <View style={{ padding: 5 }}>
                  <View style={{ backgroundColor: "#2a3b45", flexDirection: "row", padding: 5, alignItems: "center", marginBottom: "3%" }}>
                    <Text style={{ color: "#84959f", marginHorizontal: 15, fontSize: 15, fontWeight: "200" }}>UnBlock {res.name} to send messages</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "38%", marginTop: "5%" }}>
                    <Text style={{ marginLeft: 20, color: "#00a884" }} onPress={UnblockHandler}>Cancel</Text>
                    <Text style={{ marginLeft: 20, color: "#00a884" }} onPress={() => OnUnBlockHandler(res)}>Unblock</Text>
                  </View>
                </View>
              </Overlay>
              <Overlay visible={BlockVisible} onBackdropPress={onBlockHandler} overlayStyle={{ backgroundColor: "#233239" }} backdropStyle={{ backgroundColor: "transparent" }}>
                <View>
                  <View style={{ marginLeft: "4%" }}>
                    <View style={{ paddingTop: 6, paddingLeft: 6 }}>
                      <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Block {res.name} ?</Text>
                    </View>
                    <View style={{ padding: 6 }}>
                      <Text>
                        <Text style={{ color: "#8591a0" }}>{Block}</Text>
                      </Text>
                    </View>
                  </View>
                  <View >
                    <TouchableOpacity>
                      <CheckBox uncheckedColor='#84959f' checkedColor='#00a884' title={Report} containerStyle={{ backgroundColor: "transparent", borderColor: "transparent", padding: 10 }} textStyle={{ padding: 5, color: "#8596a0", marginTop: 5 }} checked={checkbox} onPress={onCheckBox} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "60%", marginBottom: "4%", marginTop: "3%" }}>
                    <Text style={{ color: "#00a884" }} onPress={onBlockHandler}>Cancel</Text>
                    <Text style={{ marginLeft: 20, color: "#00a884" }} onPress={() => onClickBlockHandler(res)}>Block</Text>
                  </View>
                </View>
              </Overlay>

              {
                res.block ?
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", position: "absolute", backgroundColor: "#1c272d", top: 470, padding: 2, borderRadius: 5 }} onPress={() => UnblockHandler(res)}>You Blocked this contact. Tap to unblock</Text>
                  </View> : null
              }
              <View style={theme.insideStyles.View1} >
                {
                  res.message?.map((item, i) => (
                    <View key={i} style={theme.insideStyles.text}>
                      <Text style={theme.insideStyles.text21}>
                        {item}
                      </Text>
                      {/* <Icon name='checkmark-done' size={20} color="#55bee5"/> */}
                    </View>
                  ))}
                <View >
                  <TextInput
                    placeholder='Message'
                    placeholderTextColor="#8596a0"
                    value={message}
                    onChangeText={(t) => { setMessage(t) }}
                    style={theme.insideStyles.input}

                  />
                  <Maticon name='send-circle'
                    size={43}
                    color="#00a884"
                    onPress={() => {
                      let data = [...chat]
                      let index = data.findIndex(i => i.id == res.id)
                      if (index >= 0 && message.length !== 0) {
                        let msg = data[index].message
                        message && msg.push(message)
                        setMessage('')
                      }
                      else {
                        Alert.alert(`firstu type pannu ${res.name} ku`)
                      }
                      setChat(data)
                    }} style={theme.insideStyles.Icon2}
                  />
                </View>
                <View style={theme.insideStyles.typeview}>
                  <Enticon name='smiley' color='#8596a0' size={30} style={{ borderRadius: 20, marginTop: "3%", padding: 3 }} />
                </View>
              </View>


            </ImageBackground>
          </View >
        )
      }
    </ThemeConsumer >
  )
}

export default Inside




























// const [messageData, setMessageData] = useState([])

const onAddHandler = () => {

  // if (message.length !== 0) {
  //   setMessageData(prev => [...prev, message])
  //   setMessage("")

  // axios
  //   .post('https://whatsapp-c164f-default-rtdb.firebaseio.com/data.json',
  //     {
  //       messageData: messageData
  //     })
  //   .then(function (response) {
  //     (response.data);
  //   })
  //   .catch(function (error) {
  //     Alert.alert(error.message);
  //   })
  // }


}
// useEffect(() => {
//   setMessage('')
//   setMessageData([])

// }, [params])