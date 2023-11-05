import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MenuBar = () => {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="home" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="airplane" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="map" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="person" size={32} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  icon: {
    alignItems: 'center',
  },
})

export default MenuBar
