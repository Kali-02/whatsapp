import {
  ImageBackground,
  Modal,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Formik} from 'formik';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  Button,
  Card,
  CheckBox,
  Image,
  Text,
  ThemeConsumer,
} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dropdown from './Dropdown';
import {useNavigation} from '@react-navigation/native';
import SignIn from './SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Form = () => {
  const onDateSelected = (event, value) => {
    setDatePicker(false);
    setNewdata(value.toLocaleDateString());
  };
  const navigation = useNavigation();
  const [radio, setRadio] = useState([0]);
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const AddDate = () => {
    setDatePicker(true);
  };

  const [datePicker, setDatePicker] = useState(false);
  const [newdata, setNewdata] = useState('MM/DD/YY');
  const [data, setData] = useState([
    {
      message: 'Accept terms & condition',
      checked: false,
    },
    {
      message: 'Iam not a Human',
      checked: false,
    },
  ]);
  const onAddHandler = async values => {
    navigation.navigate('drawer');
    const res = await axios
      .post(
        'https://whatsapp-c164f-default-rtdb.firebaseio.com/kaliappanDatas.json',
        values,
      )
      .catch(err => console.log(err));
    console.log(res.status);
    await AsyncStorage.setItem('login', '1');
  };
  const loginValidationSchema = yup.object().shape({
    // email: yup
    //   .string()
    //   .email('please enter valid email')
    //   .trim()
    //   .required('Email Address is required'),
    // password: yup
    //   .string()
    //   .matches(/^\S*$/, 'Enter without spaces')
    //   .min(5, ({min}) => `password must be at least ${min} characters`)
    //   .max(15, ({max}) => `password should only contain below ${max} character`)
    //   .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    //   .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    //   .matches(/\d/, 'Password must have a number')
    //   .matches(
    //     /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    //     'Password must have a special character',
    //   )
    //   .required('password is required'),
    // YourAge: yup.number().required('Age is required'),
    // GaurdianAge: yup
    //   .number()
    //   .moreThan(
    //     yup.ref('YourAge'),
    //     'Gaurdian age must be greater than your age',
    //   ),
  });

  return (
    <ThemeConsumer>
      {({theme}) => (
        <ImageBackground
          source={require('../assests/background.jpg')}
          style={theme.formStyles.ImageBackground}>
          <StatusBar backgroundColor={'#144a3b'} />
          <ScrollView style={theme.formStyles.ScrollView}>
            <View style={theme.formStyles.View1}>
              <Icon
                style={theme.formStyles.Icon1}
                color={'white'}
                name="whatsapp"
                size={60}
              />
              <Text style={theme.formStyles.Text1}>Whatsapp</Text>
            </View>
            <View style={theme.formStyles.View2}>
              <Text style={theme.formStyles.Text2}>from</Text>

              <Text h4 style={{color: 'white'}}>
                KALI
              </Text>
            </View>

            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: ' ', password: ''}}
              onSubmit={values => onAddHandler(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <View style={theme.formStyles.View3}>
                  <Text style={theme.formStyles.Text3}>Enter Email Id</Text>

                  <TextInput
                    name="email"
                    placeholder="Email"
                    style={theme.formStyles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && (
                    <Text style={theme.formStyles.Text4}>{errors.email}</Text>
                  )}
                  <Text style={theme.formStyles.Text5}>
                    Enter Your Password
                  </Text>
                  <View>
                    <TextInput
                      name="password"
                      placeholder="Password"
                      style={theme.formStyles.textInput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.password && touched.password && (
                    <Text style={theme.formStyles.Text6}>
                      {errors.password}
                    </Text>
                  )}
                  <View
                    style={{
                      alignItems: 'center',
                      marginRight: '10%',
                      flexDirection: 'row',
                      marginTop: '3%',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: 3,
                      }}>
                      Date Of Birth:
                    </Text>
                    <Text
                      style={{
                        backgroundColor: 'lightgreen',
                        marginTop: '3%',
                        paddingHorizontal: '2%',
                        fontSize: 20,
                        fontWeight: '700',
                        marginLeft: 10,
                      }}
                      onPress={AddDate}>
                      {newdata}
                    </Text>
                    {datePicker && (
                      <DateTimePicker
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onDateSelected}
                      />
                    )}
                  </View>

                  <TextInput
                    name="YourAge"
                    placeholder="enter age"
                    style={theme.formStyles.textInput}
                    onChangeText={handleChange('YourAge')}
                    onBlur={handleBlur('YourAge')}
                    value={values.YourAge}
                    keyboardType="numeric"
                  />

                  {errors.YourAge && touched.YourAge && (
                    <Text style={theme.formStyles.error1}>
                      {errors.YourAge}
                    </Text>
                  )}
                  <Text style={{fontSize: 20, color: 'white', elevation: 20}}>
                    Enter Gaurdian Age
                  </Text>

                  <TextInput
                    name="GaurdianAge"
                    placeholder="enter age"
                    style={theme.formStyles.textInput}
                    onChangeText={handleChange('GaurdianAge')}
                    onBlur={handleBlur('GaurdianAge')}
                    value={values.GaurdianAge}
                    keyboardType="numeric"
                  />
                  {errors.GaurdianAge && touched.GaurdianAge && (
                    <Text style={theme.formStyles.error1}>
                      {errors.GaurdianAge}
                    </Text>
                  )}

                  {data.map((item, i) => (
                    <View key={i} style={theme.formStyles.checkBoxContainer}>
                      <CheckBox
                        checkedColor="white"
                        uncheckedColor="black"
                        checkedIcon="smile-o"
                        uncheckedIcon="frown-o"
                        size={30}
                        onPress={() => {
                          data.map((dat, index) => {
                            index == i
                              ? (dat.checked = !dat?.checked)
                              : data.checked;
                          });
                          setData([...data]);
                        }}
                        // style={{}}

                        checked={item.checked}
                      />

                      <View style={{padding: 10}}>
                        <Text style={theme.formStyles.Text7}>
                          {item.message}
                        </Text>
                      </View>
                    </View>
                  ))}
                  <View style={theme.formStyles.View4}>
                    <View style={{flexDirection: 'row'}}>
                      <CheckBox
                        containerStyle={theme.formStyles.checkBox1}
                        title={
                          <Text style={{color: 'white', fontSize: 20}}>
                            Male
                          </Text>
                        }
                        onPress={() => setRadio(0)}
                        checked={radio == 0}
                        checkedIcon="male"
                        checkedColor="#97fa8e"
                        uncheckedIcon="male"
                        uncheckedColor="white"
                      />
                      <CheckBox
                        containerStyle={theme.formStyles.checkBox1}
                        title={
                          <Text style={theme.formStyles.Text8}>Female</Text>
                        }
                        onPress={() => setRadio(1)}
                        checked={radio == 1}
                        checkedIcon="female"
                        checkedColor="#97fa8e"
                        uncheckedColor="white"
                        uncheckedIcon="female"
                      />
                    </View>
                    <View style={theme.formStyles.View5}>
                      <Dropdown />
                    </View>
                    <View style={theme.formStyles.View6}>
                      <Button
                        buttonStyle={theme.formStyles.button}
                        titleStyle={theme.formStyles.titleStyle}
                        onPress={handleSubmit}
                        title="JOIN"
                        disabled={!data || !isValid}
                      />
                    </View>
                    <View>
                      <Text
                        onPress={() => setVisible(!visible)}
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 14,
                          textDecorationLine: 'underline',
                          textDecorationColor: 'blue',
                        }}>
                        Already have an account?
                      </Text>
                      <Modal visible={visible} animationType="fade">
                        <SignIn onClose={() => setVisible(!visible)} />
                      </Modal>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </ImageBackground>
      )}
    </ThemeConsumer>
  );
};

export default Form;

const styles = StyleSheet.create({});
