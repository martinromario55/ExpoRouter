import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { router } from 'expo-router'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2f95dc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }}></Stack.Screen>
      <Stack.Screen
        name="register/index"
        options={{
          title: 'Register',
          headerRight: () => (
            <Button title="Login" onPress={() => router.push('/login')} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{ title: 'Login Modal' }}
      ></Stack.Screen>

      <Stack.Screen
        name="(tabs)"
        options={{ title: 'tabs', headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen name="[missing]" options={{ title: '404' }}></Stack.Screen>
    </Stack>
  )
}
