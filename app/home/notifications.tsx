import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router/src/useNavigation'
import { DrawerActions } from '@react-navigation/native'

export default function Notifications() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Notifications</Text>

      <Button
        title="open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}
