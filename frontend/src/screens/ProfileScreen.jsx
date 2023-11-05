import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Pressable, View, Text } from 'react-native' // Import Text
import AsyncStorage from '@react-native-async-storage/async-storage'
import Signup from '../components/Signup'
import LoginComponent from '../components/LoginComponent'
import Profile from '../components/Profile'

const ProfileScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [signup, setSignup] = useState(true)

  useEffect(() => {
    checkLoginStatus()
  }, [loggedIn])

  const checkLoginStatus = async () => {
    const loginStatus = await AsyncStorage.getItem('loggedIn')
    setLoggedIn(loginStatus)
  }

  return (
    <SafeAreaView style={styles.container}>
      {loggedIn ? (
        <Profile
          onLogoutSuccess={() => {
            checkLoginStatus()
          }}
        />
      ) : signup ? (
        <View>
          <Signup
            onLoginSuccess={() => {
              checkLoginStatus()
            }}
          />
          <Pressable
            onPress={() => {
              setSignup(false)
            }}
          >
            <Text>Sign in</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <LoginComponent
            onLoginSuccess={() => {
              checkLoginStatus()
            }}
          />
          <Pressable
            onPress={() => {
              setSignup(true)
            }}
          >
            <Text>Sign up</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ProfileScreen
