import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text,Alert } from 'react-native';
import axios from 'axios';
const CD = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://reqres.in/api/users/100')
      .then(function (response) {
        Alert.alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        Alert.alert(error.message);
      })
  };

  // const postDataUsingSimplePostCall = () => {
  //   axios
  //     .all([
  //       axios
  //         .post('https://jsonplaceholder.typicode.com/posts', {
  //           title: 'foo',
  //           body: 'bar',
  //           userId: 10,
  //           id: 100,
  //           name: 'kaliappan'
  //         })
  //         .then(function (response) {
  //           alert(JSON.stringify(response.data));
  //         })
  //         .catch(function (error) {
  //           alert(error.message);
  //         }),
  //       // axios
  //       // .post('')
  //     ])
  // };
  // const multipleRequestsInSingleCall = () => {
  //   axios
  //     .all([
  //       axios
  //         .get('https://jsonplaceholder.typicode.com/posts/1')
  //         .then(function (response) {
  //           alert(JSON.stringify(response.data));
  //         }),
  //       axios
  //         .get('https://jsonplaceholder.typicode.com/posts/2')
  //         .then(function (response) {
  //           alert(JSON.stringify(response.data));
  //         }),
  //     ])
  // }
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Get </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.buttonStyle}
        // onPress={postDataUsingSimplePostCall}
        >
        <Text>POST</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        // onPress={multipleRequestsInSingleCall}
        >
        <Text>Multiple  Call</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
export default CD;