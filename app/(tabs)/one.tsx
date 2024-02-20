import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Page() {
  return (
    <View>
      <Text>This is Tab one</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  )
}
