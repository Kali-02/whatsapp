import React, { useState } from "react";
import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Profile = () => {

    const [cameraPhoto, setCameraPhoto] = useState()
    const [galleryPhoto, setGalleryPhoto] = useState()

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options)
            setCameraPhoto(result.assets[0].uri)
        }
    }


    const openGallery = async () => {
        const result = await launchImageLibrary(options)
        setGalleryPhoto(result.assets[0].uri)
    }

    return (
        <View style={styles.maincontainer}>
            <TouchableOpacity onPress={openCamera}>
                <Text style={styles.text}>Open Camera</Text>
            </TouchableOpacity>
            <Image source={{ uri: cameraPhoto }} style={{ width: 150, height: 150 }} />

            <TouchableOpacity onPress={openGallery}>
                <Text style={styles.text}>Open Galery</Text>
            </TouchableOpacity>
            <Image source={{ uri: galleryPhoto }} style={{ width: 150, height: 150 }} />
        </View>
    )
}


const styles = StyleSheet.create(
    {
        maincontainer: {
            alignSelf: "center",

        },
        text: {
            fontSize: 30,
            marginTop: 60,
        },

    }
)

export default Profile