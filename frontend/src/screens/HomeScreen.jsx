import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useAuth } from '../context/AuthContext'

const HomeScreen = () => {
  const { logout } = useAuth()
  const routes = [
    { id: 1, title: 'Route 1' },
    { id: 2, title: 'Route 2' },
    { id: 3, title: 'Route 3' },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Let's choose a travel route</Text>
      <SearchBar />
      {/*
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.routeCards}>
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} />
          
        ))}
      </ScrollView>
        */}
      <Text
        onPress={() => {
          logout()
        }}
      >
        Logout
      </Text>
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
