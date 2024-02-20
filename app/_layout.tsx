import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { AntDesign, Entypo } from '@expo/vector-icons'
import CustomDrawerContent from '../components/customDrawerContent'

export default function _layout() {
  return (
    <Drawer
      screenOptions={{
        drawerLabelStyle: { marginLeft: -20 },
        // drawerActiveBackgroundColor: 'gray',
        // drawerActiveTintColor: 'white',
        // drawerInactiveTintColor: 'white',
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          title: 'About',
          drawerLabel: 'About',
          drawerIcon: ({ size, color }) => (
            <AntDesign name="infocirlce" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  )
}
