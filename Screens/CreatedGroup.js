import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation,useRoute} from '@react-navigation/native'

const CreatedGroup = () => {
  const route = useRoute()
  const {name} = route.params
  return (
    <View>
      <Text>{name.name}</Text>
    </View>
  )
}

export default CreatedGroup

const styles = StyleSheet.create({})