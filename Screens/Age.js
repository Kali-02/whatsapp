import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/Ionicons';

const Age = (props) => {

    const [datePicker, setDatePicker] = useState(false)

    const [date, setDate] = useState(new Date())

    const [timePicker, setTimePicker] = useState(false)

    const [time, setTime] = useState(new Date(Date.now()))

    const showDatePicker = () => {
        setDatePicker(true)
    }

    const showTimePicker = () => {
        setTimePicker(true)
    }

    const onDateSelected = (event, value) => {
        setDate(value)
        setDatePicker(false)
    }

    const onTimeSelected = (event, value) => {
        setTime(value)
        setTimePicker(false)
    }


    return (
        <View style={styles.MainContainer}>
            <Icon onPress={props.onClose} name='md-close-circle-outline' size={30} color="black" style={{marginLeft:"80%"}} />
            <Text style={styles.text}>Date = {date.toDateString()}</Text>
            {/* <Text style={styles.text}>Time = {time.toLocaleTimeString('en-US')}</Text> */}

            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    // display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                />
            )} 
            {timePicker && (
                <DateTimePicker
                    value={time}
                    mode={'time'}
                    // display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    is24Hour={false}
                    onChange={onTimeSelected}
                />
            )}
            {!datePicker && (
                <View style={{ margin: 10 }}>
                    <Button title='Date' onPress={showDatePicker} />
                </View>
            )}
            {/* {!timePicker && (
                <View style={{ margin: 10 }}>
                    <Button title='Time' onPress={showTimePicker} />
                </View>
            )} */}
        </View>
    )
}
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 25,
        color: 'orange',
        padding: 13,
        marginBottom: 17,
        textAlign: 'center'
    },

});



export default Age;
