import { ImageBackground, StyleSheet, Text, View } from 'react-native'
// import React,  from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import UserContext from '../Context'
import { useContext } from 'react'
import Calldata from './Calldata'
import { Avatar } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
const Call = ({ navigation }) => {


  const { Data, setData1, select, setSelect, calls, setCalls } = useContext(UserContext)
  return (
    <View style={{ flex: 1, backgroundColor: "#121b22", padding: "3%" }}>
      <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Linkpage")}>
        <View style={{ backgroundColor: "#00a884", borderRadius: 25, height: 45, width: 50, alignItems: "center", justifyContent: "center" }}>
          <Icon name='link' size={35} color='white' style={{ transform: [{ rotate: '130deg' }] }} />
        </View>
        <View style={{ marginLeft: "5%" }}>
          <Text style={{ fontSize: 20, color: "white" }}>Create call link</Text>
          <Text style={{ fontSize: 15, color: "#727f88" }}>Share a link for your Whatsapp call</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ color: '#727f88', marginTop: 30 }}>Recent</Text>
      <View>
        <ScrollView>
          {
            calls.map((res, i) => {
              return (


                <View key={i} style={{ flexDirection: "row", padding: 8 }}>
                  <View style={{ flexDirection: "row", width: "80%" }} >
                    <Avatar rounded source={res.image} size={50} />
                    <Text style={{ color: "white", marginLeft: "5%", fontSize: 20 }}>{res.name}</Text>
                  </View>
                  <View style={{ marginLeft: "13%" }}>
                    <Icon name='md-call-sharp' size={25} color='#00a884' onPress={() => navigation.navigate("Calling2", { res })} />
                  </View>
                </View>


              )
            })

          }
        </ScrollView>



        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ color: "white" }}>Your Personal calls are</Text>
          <Text style={{ color: "#00a884", marginLeft: 4, }}>end-to-end encripted</Text>
        </View>
      </View>
    </View>
  )

}
export default Call


// const [open, setOpen] = React.useState(false);
// return (
//   <SpeedDial
//     isOpen={open}
//     icon={{ name: 'edit', color: '#fff' }}
//     openIcon={{ name: 'close', color: '#fff' }}
//     onOpen={() => setOpen(!open)}
//     onClose={() => setOpen(!open)}
//   >
//     <SpeedDial.Action
//       icon={{ name: 'add', color: '#fff' }}
//       title="Add"
//       onPress={() => console.log('Add Something')}
//     />
//     <SpeedDial.Action
//       icon={{ name: 'delete', color: '#fff' }}
//       title="Delete"
//       onPress={() => console.log('Delete Something')}
//     />
//   </SpeedDial>
// );
