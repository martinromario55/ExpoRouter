import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Fontisto, Entypo } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Fontisto name="player-settings" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
