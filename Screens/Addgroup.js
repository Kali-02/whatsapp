import { View, Text, StatusBar, VirtualizedList, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useRoute } from "@react-navigation/native"
import { Avatar, Overlay } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"
import UserContext from '../Context'

const Addgroup = () => {
    const route = useRoute()
    const group = route.params
    const [name, setName] = useState('')
    const [state, setState] = useState({})
    const navigation = useNavigation()
    const { chat, setChat } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const getItem = (data, index) => {
        return data[index]
    }
    const onNameHandler = (val) => {
        setName(val)
    }
    const onPressHandler = (e) => {
        let grp = { id: chat.length, name: name, grpMembers: [...group] }
        console.log('group', grp);
        chat.unshift(grp)
        console.log('chat', chat);
        setLoading(!loading)
        setTimeout(() => {
            setLoading(!loading)
            navigation.navigate("drawer")
        }, 2000);
    }




    return (
        <View style={{ backgroundColor: "#0b141b", flex: 1 }}>
            <StatusBar
                backgroundColor="#2a3b45"
                barStyle="light-content"
            />
            <Overlay visible={loading} overlayStyle={{ backgroundColor: "#233239" }} >
                <View style={{ backgroundColor: "#233239", flexDirection: "row", padding: 5, alignItems: "center" }}>
                    <ActivityIndicator size={50} />
                    <Text style={{ color: "white", marginHorizontal: 15, fontSize: 15, fontWeight: "200" }}>Please Wait a Moment</Text>
                </View>
            </Overlay>
            <View style={{ flexDirection: "row", padding: "4%", justifyContent: "space-evenly", backgroundColor: "#121b22", marginTop: 10, alignItems: "center" }} >
                <View>
                    <Icon name='camera' size={20} color='white' style={{ backgroundColor: "#cfd8df", borderRadius: 50, padding: 15 }} />
                </View>
                <View style={{ width: "70%" }}>
                    <TextInput
                        placeholder='Type group subject here'
                        placeholderTextColor='#8695a1'
                        cursorColor="#00a884"
                        underlineColorAndroid="#00a884"
                        style={{ width: "90%", color: "white" }}
                        onChangeText={(val) => onNameHandler(val)}


                    />
                </View>
                <View>
                    <Icon name='happy' size={28} color='#8596a0' />
                </View>
            </View>
            <View style={{ flexDirection: "row", padding: "4%", justifyContent: "space-between", backgroundColor: "#121b22", marginTop: 10, alignItems: "center" }} >
                <View>
                    <Text style={{ color: "white", fontSize: 15 }}>
                        Disappearing messages
                    </Text>
                    <Text style={{ color: "white" }}>off</Text>
                </View>
                <View style={{ marginRight: "3%" }}>
                    <Icon name='ios-timer' size={30} color='#8696a0' />
                </View>
            </View>
            <Text style={{ color: "#87959f", fontSize: 15, fontWeight: "300", marginTop: "1%", padding: 10 }}>
                Participants:
            </Text>
            <View>
                <VirtualizedList
                    horizontal
                    data={group}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={{ padding: 10, flexDirection: "row" }}>
                                <Avatar source={item.image} size={50} rounded />
                            </View>
                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id}
                    getItemCount={data => data.length}
                    getItem={getItem}
                />
            </View>
            <TouchableOpacity onPress={(e) => onPressHandler(e)}>
                <View style={{ marginLeft: "80%", marginTop: "80%" }}>
                    <MatIcon name='done' size={40} color="white" style={{ backgroundColor: "#00a884", borderRadius: 30, alignSelf: "center", padding: 5 }} />
                </View>
            </TouchableOpacity>

        </View>

    )
}

export default Addgroup