import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
const Dropdown = () => {
    const [selected,setSelected] = React.useState([])
    const [open,setOpen] = useState("")
    const data=[
        {
            key:1,
            label: 'Foodie',
            value: 'Foodie',
            icon: () => <Icon name="md-fast-food-outline" size={30} />,

        },
        {
            key:2,
            label: 'Streamer',
            value: 'Streamer',
            icon: () => <Icon name="game-controller" size={30} />
        },
        {
            key:3,
            label: 'Raider',
            value: 'Raider',
            icon: () => <Icon name="bicycle-sharp" size={30} />

        },
        {
            key:4,
            label: 'Anime-Lover',
            value: 'Anime-Lover',
            icon: () => <Icon name="logo-octocat" size={30} />

        },
        {
            key:5,
            label: 'Socialist',
            value: 'Socialist',
            icon: () => <Icon name="people-outline" size={30} />

        },]
    
    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ width:300}}>

                <MultipleSelectList dropdownStyles={{backgroundColor:"#90fcad",height:80}} boxStyles={{backgroundColor:"#90fcad"}} checkBoxStyles={{backgroundColor:"white"}}  badgeStyles={{backgroundColor:"green"}} 
                     setSelected={(val) => setSelected(val)} 
                     
                     icon={Icon}
                     data={data} 
                     save="value"
                     open={open}
                     setOpen={setOpen}
                     label="Categories"

                />
            </View>

        </View>
    );
};


export default Dropdown;
