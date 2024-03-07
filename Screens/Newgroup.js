import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import NewData from '../NewData'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const NewGroup = () => {
    const [group, setGroup] = useState([])
    const navigation = useNavigation()
    const [tick, setTick] = useState()

    const AddHandler = (item) => {
        let data = [...group]
        let index = data.findIndex(i => i.id == item.id)
        if (index > -1) {
            let filter = data.filter(i => i.id != item.id)
            setGroup(filter)
            item.tick = false

        }
        else {
            setGroup(prev => [...prev, item])
            setTick(!tick)
            item.tick = true
        }
    }
    const onDeleteHandler = (item) => {
        let i = [...group]
        let del = i.filter(i => i.id != item.id)
        setGroup(del)
        item.tick = !item.tick
    }
    const getItem = (data, index) => {
        return data[index]
    }
    console.log('grp', group);
    return (
        <View style={{ backgroundColor: "#121b22", flex: 1 }}>
            <View style={{ backgroundColor: "#1f2c34", flexDirection: "row", paddingBottom: 10, padding: 7 }}>
                <Icon name='arrow-back' color='white' size={25} style={{ marginTop: "3%" }} onPress={() => navigation.goBack()} />
                <View style={{ marginLeft: "5%", }}>
                    <Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>New Group</Text>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "300" }}> Add participants</Text>
                </View>
                <View style={{ marginLeft: "45%", padding: "2%" }}>
                    <Icon name='search' color='white' size={28} />
                </View>
            </View>
            <View>
            </View>
            {group.length ?
                <View style={{ flexDirection: "row" }}>
                    {group.map((item, i) => {
                        return (
                            <View key={i}>
                                <View style={{ flexDirection: "row", marginLeft: "2%" }}>
                                    <Avatar source={item.image} size={50} rounded />
                                    <Icon name='close-circle' color="grey" size={20} style={styles.closeIcon} onPress={() => onDeleteHandler(item)} />
                                </View>
                            </View>
                        )
                    })}
                </View>
                : null
            }
            <View >
                <VirtualizedList
                    data={NewData}
                    renderItem={({ item, i }) =>
                    (
                        <TouchableWithoutFeedback onPress={() => AddHandler(item)} >
                            <View >
                                <View style={{ padding: 10 }}>
                                    <View style={{ flexDirection: "row", marginTop: "2%" }}>
                                        <Avatar source={item.image} size={40} rounded />
                                        {item.tick &&
                                            <AntIcon
                                                name='check-circle-fill'
                                                size={24} color="#00a884"
                                                style={{ marginTop: "5%", position: "absolute", marginLeft: "7%",backgroundColor:"white",borderRadius:30,height:6,width:"0%" }}
                                            />
                                        }
                                        <Text style={{ marginLeft: "5%", color: "white", fontSize: 20 }} >{item.name}</Text>
                                    </View>
                                    <View style={{ marginLeft: "18%", position: "absolute", marginTop: "12%" }}>
                                        <Text
                                            style={{ fontWeight: "200", color: "white", fontSize: 15 }}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    }
                    keyExtractor={item => item.id}
                    getItemCount={data => data.length}
                    getItem={getItem}
                />
            </View>
            {group.length != 0 ?
                <Icon
                    name='md-arrow-forward'
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => navigation.navigate("Addgroup",group)}
                /> : null
            }
        </View>
    )
}

export default NewGroup

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        bottom: "3%",
        left: "85%",
        backgroundColor: "#00a884",
        borderRadius: 50,
        padding: 8
    },
    closeIcon: {
        position: "absolute",
        marginTop: "55%",
        marginLeft: "63%"
    }
})