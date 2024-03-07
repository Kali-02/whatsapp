import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, ThemeConsumer } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { Formik } from 'formik'
// import { validateYupSchema } from 'formik'
import * as yup from "yup"
import AsyncStorage from '@react-native-async-storage/async-storage'
const SignIn = (props) => {
    const navigation = useNavigation()
    const [userData, setUserData] = useState([{}])
    const loginValidationSchema = yup.object().shape({

    })
    const img = require("../assests/background.jpg")
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const res = await axios.get("https://whatsapp-c164f-default-rtdb.firebaseio.com/kaliappanDatas.json")
            setUserData(Object.values(res.data))
        } catch (error) {
            console.log(error);
        }
        await AsyncStorage.setItem('login','1')
    }
    const onCheckHandler = values => {

        let invalid = true
        userData?.map((result, i) => {
            if ((result?.email === values?.email) && (result?.password === values?.password)) {
                navigation.navigate('drawer')
                invalid = false
            }

        }
        )
        if (invalid) {
            Alert.alert("invalid")
        }
    }

    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <ImageBackground source={img} style={{ height: "100%", flex: 1 }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon onPress={props.onClose} name='arrow-back' size={30} color="white" style={{ marginLeft: "-6%" }} />
                                <Text style={styles.text1}>Sign Up</Text>
                            </View>
                            <Formik
                                validationSchema={loginValidationSchema}
                                initialValues={{ email: ' ', password: '' }}
                                onSubmit={values => onCheckHandler(values)}
                            >
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    touched,
                                    values,
                                    errors,
                                    isValid,
                                }) => (
                                    <View>
                                        <View style={{ alignSelf: "center", marginTop: "10%" }}>
                                            <TextInput
                                                name="email"
                                                placeholder='Enter Email'
                                                style={theme.formStyles.textInput}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                keyboardType="email-address"
                                            />
                                            {
                                                errors.email && touched.email &&
                                                <Text style={theme.formStyles.Text4}>
                                                    {errors.email}
                                                </Text>
                                            }
                                            <View style={{ marginTop: "5%" }}>
                                                <TextInput
                                                    name="password"
                                                    placeholder='Enter your Password'
                                                    style={theme.formStyles.textInput}
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password}
                                                    keyboardType="email-address"
                                                />
                                                {
                                                    errors.password && touched.password &&
                                                    <Text style={theme.formStyles.Text6}>
                                                        {errors.password}
                                                    </Text>
                                                }
                                            </View>
                                        </View>
                                        <View style={{ width: 160, marginTop: "8%", alignSelf: "center" }}>
                                            <Button title='SIGN UP' buttonStyle={theme.formStyles.button} titleStyle={theme.formStyles.titleStyle} onPress={handleSubmit} disabled={!userData || !isValid} />
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>

                    </ImageBackground>

                )}
        </ThemeConsumer >



    )
}


export default SignIn

const styles = StyleSheet.create({
    text1: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: "30%"
    }
})