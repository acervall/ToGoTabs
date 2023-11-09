import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    const userData = await AsyncStorage.getItem('userData')
    const loginStatus = await AsyncStorage.getItem('loggedIn')
    setLoggedIn(loginStatus)

    if (userData) {
      const parsedUserData = JSON.parse(userData)
      setUser(parsedUserData)
    }
  }

  return (
    <View style={styles.header}>
      <Text style={styles.welcomeText}>{loggedIn ? `Hi, ${user.first_name}` : 'Welcome!'}</Text>
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
