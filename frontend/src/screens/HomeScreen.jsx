import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Let's choose a travel route</Text>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  routeCards: {
    flexDirection: 'row',
  },
})

export default HomeScreen
