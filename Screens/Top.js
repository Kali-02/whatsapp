import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "./chat";
import Stat from "./Stat";
import Call from "./call";

const Top = createMaterialTopTabNavigator()

const Tab = () => {
  return (
      <Top.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "#121b22",borderTopColor:"#121b22",borderWidth:1,elevation:50, }, tabBarPressColor: "white", }}>
        <Top.Screen name="Chats" component={Chat} options={{ title: 'chats',tabBarActiveTintColor:"#2c9c65",tabBarInactiveTintColor:'#727f88',tabBarIndicatorStyle:{backgroundColor:"#2c9c65"} }}  />
        <Top.Screen name="Status" component={Stat} options={{ title: 'status',tabBarActiveTintColor:"#2c9c65",tabBarInactiveTintColor:'#727f88',tabBarIndicatorStyle:{backgroundColor:"#2c9c65"} }} />
        <Top.Screen name="Calls" component={Call} options={{ title: 'calls',tabBarActiveTintColor:"#2c9c65",tabBarInactiveTintColor:'#727f88',tabBarIndicatorStyle:{backgroundColor:"#2c9c65"} }} />
      </Top.Navigator>
    
  );
}

export default Tab