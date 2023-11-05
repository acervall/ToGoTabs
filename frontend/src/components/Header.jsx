import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { loggedIn, user } = useAuth()

  return (
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Hi, {loggedIn ? user : 'Welcome'}</Text>
      {loggedIn && (
        <Image source={{ uri: 'url_to_user_profile_image' }} style={styles.profileImage} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 14,
    color: 'gray',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})

export default Header
