import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Posts = () => {
  return (
    <View style={styles.container}>
      <Link href={'/posts/1'}>Open post 1</Link>
      <Link href={'/posts/2'}>Open post 2</Link>
      <Link href={'/posts/3'}>Open post 3</Link>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
