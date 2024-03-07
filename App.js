import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Inside from './Screens/Inside';
import Form from './Screens/Form';
import { createStackNavigator } from '@react-navigation/stack';
import Draw from './stack';
import Folder from './Screens/folder';
import Settings2 from './Screens/Settings2';
import About from './About';
import UserContext from './Context';
import Details from './Screens/info';
import Editpage from './Screens/Editpage';
import { ThemeProvider } from 'react-native-elements';
import Theme from './Screens/theme';
import datas from './Datas';
import Profile from './profilepick';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadScreen from './Screens/loadScreen';
import Calling from './Calling';
import Calling2 from './Screens/Calling2';
import Linkpage from './Screens/linkpage';
import Statusdata from './Statusdata';
import Viewstatus from './Screens/Viewstatus';
import NewGroup from './Screens/Newgroup';
import Addgroup from './Screens/Addgroup';
import CreatedGroup from './Screens/CreatedGroup';
import New from './Screens/New';
const App = () => {
  const Stack = createStackNavigator();
  const [Data, setData1] = useState("")
  const [chat, setChat] = useState(datas)
  const [value, setValue] = useState("")
  const [select, setSelect] = useState({
    name: "Kali",
    image: require("../whatsapp/assests/vijay.jpg"),
    icon: "md-call-sharp",
    block:false
  })
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [chat1, setChat1] = useState(Statusdata)
  const [deleteit, setdeleteit] = useState(true)
  const [calls, setCalls] = useState([])
  useEffect(() => {
    get()
    setTimeout(() => setLoading(false), 1000)
  }, [])


  const get = async () => {
    let res
    try {
      res = await AsyncStorage.getItem('login')
    } catch (err) {
      console.log(err)
    }
    if (res != null) {
      setLogin(true)
    }
  }


  return (
    <>
      {loading ? (<LoadScreen />) :
        (<ThemeProvider theme={Theme}>
          <UserContext.Provider value=
            {
              {
                Data,
                setData1,
                value,
                setValue,
                chat,
                setChat,
                select,
                setSelect,
                chat1,
                setChat1,
                deleteit,
                setdeleteit,
                calls,
                setCalls,
                
              }}
          >
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName={
                  login ? 'Newone' : 'Form'
                }
              >
                <Stack.Screen component={Form} name="Form" options={{ header: () => null }} />
                <Stack.Screen name='drawer' component={Draw} options={{ header: () => null }} />
                <Stack.Screen name='Inside' component={Inside} options={{ header: () => null }} />
                <Stack.Screen name='S2' component={Settings2} options={{ header: () => null }} />
                <Stack.Screen name='New' component={Folder} />
                <Stack.Screen name='About' component={About} options={{ header: () => null }} />
                <Stack.Screen name='Info' component={Details} options={{ header: () => null }} />
                <Stack.Screen name='Edit' component={Editpage} options={{ header: () => null }} />
                <Stack.Screen name='Profile' component={Profile} options={{ header: () => null }} />
                <Stack.Screen name='Calling' component={Calling} options={{ header: () => null }} />
                <Stack.Screen name='Calling2' component={Calling2} options={{ header: () => null }} />
                <Stack.Screen name='Linkpage' component={Linkpage} options={{ title: "Create call link", headerStyle: { backgroundColor: "#1f2c34" }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }} />
                <Stack.Screen name='Viewstatus' component={Viewstatus} options={{ title: "My Status", headerStyle: { backgroundColor: "#1f2c34" }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }} />
                <Stack.Screen name='Newgroup' component={NewGroup} options={{ header: () => null }} />
                <Stack.Screen name='Addgroup' component={Addgroup} options={{ title:"New group", headerStyle: { backgroundColor: "#2a3b45" }, headerTitleStyle: { color: "white" }, headerTintColor: "white"   }} />
                <Stack.Screen name='CreatedGroup' component={CreatedGroup}  options={{ header: () => null }} />
                <Stack.Screen name='Newone' component={New}  options={{ header: () => null }} />

              </Stack.Navigator>
            </NavigationContainer>
          </UserContext.Provider>
        </ThemeProvider>)}
    </>
  )
}


export default App;