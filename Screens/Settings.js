import { ImageBackground, StyleSheet, Text, View, VirtualizedList, TouchableOpacity, Image ,PermissionsAndroid} from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { Avatar, Overlay, Chip } from 'react-native-elements'
import Datas from './Data'
import { launchCamera} from 'react-native-image-picker';

const Set = () => {
    const navigation = useNavigation()

    const getItem = (datas, index) => {
        return datas[index];
    };
    const Item = ({ title, iconName }) => (
        <View style={styles.item} >
            <Icon name={iconName} size={30} color='green' />
            <Text style={styles.title}>{title}</Text>
        </View>

    );
    const [IsVisible, setIsVisible] = useState(false)
    const onOverlay = () => {
        setIsVisible(true)
    }
    const onUnderlay = () => {
        setIsVisible(false)
    }
    let options = {
        saveToPhotos: true,
        mediaType: 'image/video', storageOptions:{
            skipBackup:true,
            path:'images'
          }
    }
    const [cameraPhoto, setCameraPhoto] = useState('https://i.pinimg.com/564x/00/80/ee/0080eeaeaa2f2fba77af3e1efeade565.jpg')
    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options)
            setCameraPhoto(result.assets[0].uri)
        }
    }



    return (
        <View>
            <View style={{ backgroundColor: "#9eeab3", borderRadius: 5, flexDirection: "row", borderColor: "white", borderWidth: 1, elevation: 50, marginTop: 1 }} >
                <Avatar source={{ uri: cameraPhoto }} rounded size={80} onPress={onOverlay} />
                <View  style={{position:"absolute"}}>
                    <Chip 
                        icon={{
                            name: 'camera',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                            
                        }}
                        onPress={openCamera}
                        buttonStyle={{ backgroundColor: "#43cc6c" }}
                        containerStyle={{ marginTop: 50 }}

                    />
                </View>
                <Overlay visible={IsVisible} onBackdropPress={onUnderlay} overlayStyle={{ backgroundColor: "transparent", shadowColor: "transparent" }} >
                    <Avatar source={{uri:cameraPhoto}} size={300} />
                </Overlay>
                <Text style={{ fontSize: 35, marginLeft: 15 }}>Kali</Text>
            </View>
            <VirtualizedList
                data={Datas}
                initialNumToRender={2}
                renderItem={({ item }) =>
                (
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("S2", item)}>
                            <Item title={item.title} iconName={item.iconName} />
                        </TouchableOpacity>
                    </View>
                )
                }
                keyExtractor={item => item.id}
                getItemCount={datas => datas.length}
                getItem={getItem}
            />
            {/* // </TouchableOpacity> */}

        </View>
    )
}

export default Set

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: '#9eeab3',
        padding: 20,


    },
    title: {
        fontSize: 22,

        marginLeft: "10%"
    },
});
