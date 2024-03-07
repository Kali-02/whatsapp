import { StyleSheet, Text, View, VirtualizedList, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import dummy from './dummy'
import Icon from "react-native-vector-icons/Ionicons"
import { Image, SearchBar } from 'react-native-elements'



const Chatinfo = () => {
    const [searchData, setSearchedData] = useState("")
    const [data, setData] = useState([])

    const getItem = (datas, index) => {
        return datas[index];
    };
    useEffect(() => {
        let arr = []
        for (i = 0; i < 6; i++) {
            arr.push(dummy[i])
        } setData([...arr])
    }, [])

    const onEndReached = () => {
        let newArr = [];
        for (i = 1; i <= 3; i++) {
            newArr.push(dummy[data.length + i+1])
        }
        setData((prev) =>
            [...prev, ...newArr])

    }
    return (
        <View style={{}}>
            <SearchBar placeholder='search' onChangeText={e => setSearchedData(e)} value={searchData} containerStyle={{width:"100%",height:30,}} inputContainerStyle={{height:30}} />


            <VirtualizedList data={data}
                initialNumToRender={3}
                renderItem={({ item }) => {
                    let searchval = searchData.toLowerCase().replace(/\s/, "")
                    let outval = item?.title.toLowerCase().replace(/\s/, "")
                    if (outval?.includes(searchval))
                        return (

                            (item != null) ?
                                (<View>
                                    <Text
                                        style={styles.title}>{item.title}
                                    </Text><Icon style={styles.icon} name={item.iconName} size={30} color='green' />
                                </View>)
                                : null
                        )
                }
                }
                keyExtractor={(item, index) => index}
                onEndReached={onEndReached}
                getItemCount={data => data.length}
                getItem={getItem}
                onEndReachedThreshold={0.01}
                ListFooterComponent={ 
                    <View style={{ backgroundColor: "black",position:"relative" }}>
                        <Text style={{ backgroundColor: "black", color: "white", marginLeft: '10%' }}>Loading...</Text>
                        <ActivityIndicator style={{ flexDirection: "row", backgroundColor: "black",position:"absolute" }} />
                    </View>
                }
                ListFooterComponentStyle={{marginBottom:"8%"}}
            />
        </View>
    )
}

export default Chatinfo

const styles = StyleSheet.create({
    title: {
        borderColor: "black",
        borderWidth: 2,
        padding: 60,
        backgroundColor: "grey",
        textAlign: "center"

    }, icon:
        { position: 'absolute' }

})