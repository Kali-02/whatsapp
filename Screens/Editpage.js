import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Avatar, Button, ThemeConsumer } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons"
import UserContext from '../Context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Editpage = () => {
    const {select,setSelect}= useContext(UserContext)
    const navigation = useNavigation()
    const route = useRoute()
    const { chat, setChat } = useContext(UserContext)
    const img = require("../assests/insidebg.jpg")
    const [name, setName] = useState(select.name)
    const [title, setTitle] = useState(select.title)


    const onAddHandler = (select) => {
        if (name!=null && title!=null) {
            let data = [...chat]
            let index = data.findIndex(item => item.id == select.id)
            data[index].name = name
            data[index].title = title
            setChat(data)
            navigation.goBack()
            setSelect(prev =>({...prev,name:name,title:title}))
        }
       
       
    }
// console.log(select);

    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <ImageBackground source={img} style={theme.editStyles.flex} >
                        <Button title="Save" titleStyle={{ color: "black", fontSize: 20 }} buttonStyle={theme.editStyles.button} onPress={() => { onAddHandler(select) }} />

                        <View style={{ alignItems: 'center', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput

                                    defaultValue={select.name}
                                    placeholder='Enter the name'
                                    onChangeText={val => setName(val)}
                                    style={theme.editStyles.TextInput}
                                    cursorColor='green'

                                />
                            </View>
                            <TextInput
                                defaultValue={select.title}
                                placeholder='Enter the name'
                                onChangeText={val => setTitle(val)}
                                style={theme.editStyles.TextInput2}
                                cursorColor='green'

                            />

                        </View>
                    </ImageBackground>
                )
            }

        </ThemeConsumer>
    )
}

export default Editpage

