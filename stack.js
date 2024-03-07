
import 'react-native-gesture-handler';
import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from './Screens/Top';
import userContext from './Context';
import Call from './Screens/call';
import Cd from './information';
import Icon from 'react-native-vector-icons/FontAwesome'
import Set from './Screens/Settings';
import About from './About';
import Logout from './Screens/Logout';




const Draw = ({ navigation }) => {
    const [data, setData] = useState("")
    const Drawer = createDrawerNavigator();

    return (
        // <userContext.Provider value={{ data, setData }}>



        <Drawer.Navigator
            screenOptions={
                {
                    headerTintColor: "white",
                    drawerActiveTintColor: "#0f2617",
                    drawerActiveBackgroundColor: "#6efa9f",
                    drawerInactiveTintColor: "#2f804b",
                    drawerStyle:
                    {
                        backgroundColor: "#24d160",
                        borderColor: "#92f0b4",
                        borderWidth: 5,
                        borderRadius: 10,

                    },
                    headerStyle:
                    {
                        backgroundColor: "#121b22",
                        borderBottomColor: "#121b22"
                    },
                    headerTitleStyle: {
                        color: "white",
                    },

                }}
        >


            <Drawer.Screen name="Whatsapp" component={Tab} options=
                {{
                    drawerIcon: () => {
                        return (
                            <Icon name='whatsapp' size={30} color="black" />
                        )
                    }
                }}
            />

            <Drawer.Screen name="Calls" component={Call} options=
                {{
                    drawerIcon: () => {
                        return (
                            <Icon name="phone" size={30} color="black" />
                        )
                    }
                }} />
            <Drawer.Screen name='Settings' component={Set} options={{ headerShown: null, title: 'Settings', drawerIcon: () => { return (<Icon name='wrench' color={'black'} size={30} />) } }} />
            <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: null, title: "Logout", drawerIcon: () => { return (<Icon name="sign-out" color={"black"} size={30} />) } }} />
            <Drawer.Screen name="Status" component={About} options={{
                headerShown: null,
                title: "About", drawerIcon: () => {
                    return (
                        <Icon name='info-circle' size={30} color="black" />)
                }
            }} />
        </Drawer.Navigator>

    )
}

export default Draw;