import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { React, useContext, useState } from 'react'
import UserContext from '../Context'
import { Avatar, Overlay } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

const Viewstatus = () => {
    const { chat1, setChat1 } = useContext(UserContext)
    const {deleteit,setdeleteit}= useContext(UserContext)
    const [overlay, setOverlay] = useState(false)

    const onDeleteHandler = () => {
        setOverlay(!overlay)
    }
    const onDelHandler=()=>{
        setdeleteit(!deleteit)
        setOverlay(!overlay)
    }
   
    return (
        <View style={{ backgroundColor: "#121b22", height: "100%" }}>
            <StatusBar
                backgroundColor="#1f2c34"
                barStyle="light-content"
            />
            {deleteit ?
                <View style={{ padding: 20, flexDirection: "row" }}>
                    <Avatar source={chat1[0].image} size={40} rounded />
                    <View style={{ width: "100%", borderBottomColor: "#65747e", borderBottomWidth: 0.2, flex: 2, marginLeft: "3%", }}>
                        <Text style={{ color: "white", fontSize: 18 }}> 47 views</Text>
                        <Text style={{ color: "#65747e", fontSize: 12, marginLeft: "3%", marginBottom: 10, fontWeight: "600" }}>
                            Yesterday 1pm
                        </Text>
                    </View>
                    <View style={{ borderBottomColor: "#65747e", borderBottomWidth: 0.2, }} >
                        <Icon name='ellipsis-vertical' size={30} color="#65747e" onPress={onDeleteHandler} />
                    </View>
                </View> : <View>

                </View>
            }
            <Overlay visible={overlay} onBackdropPress={() => setOverlay(!overlay)} overlayStyle={{ top: "-30%", marginLeft: "64%", backgroundColor: "#233239" }} backdropStyle={{ backgroundColor: "transparent" }}>
                <View>
                    <Text style={{ padding: 3, color: "white" }}>
                        Forward
                    </Text>
                    <Text style={{ padding: 3, color: "white" }}>
                        share..
                    </Text>
                    <Text style={{ padding: 3, color: "white" }} onPress={onDelHandler}>
                        delete
                    </Text>
                </View>
            </Overlay>
            <Text style={{ color: "#65747e", fontSize: 11, alignSelf: "center",marginTop:"5%" }}>
                Your Status Updates will disappeared after 24 hours
            </Text>

        </View>
    )
}

export default Viewstatus

const styles = StyleSheet.create({})