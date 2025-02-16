import { Text, View } from 'react-native'
import { Stack } from 'expo-router';
import React from 'react'

import './../assets/css/global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{title: 'Home'}} />
      <Stack.Screen name='about' options={{title: 'About'}} />
    </Stack>
  )
}

export default RootLayout