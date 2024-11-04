import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Surface, Text } from 'react-native-paper'
export default function ShopViewScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text  style={styles.text}>ShopViewScreen</Text>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});