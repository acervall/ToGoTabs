import { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '../context/AuthContext'

const Profile = ({ onLogoutSuccess }) => {
  const { updateUser, logout, deleteUser } = useAuth()

  const [user, setUser] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  const ref_input2 = useRef()
  const ref_input3 = useRef()
  const ref_input4 = useRef()
  const ref_input5 = useRef()

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    })
  }

  const handleSubmit = () => {
    updateUser(user)
  }

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    const userData = await AsyncStorage.getItem('userData')

    if (userData) {
      const parsedUserData = JSON.parse(userData)
      setUser(parsedUserData)
    }
  }

  const handleLogout = async () => {
    const logoutSuccess = await logout()
    if (logoutSuccess) {
      onLogoutSuccess()
    }
  }

  const handleDelete = async () => {
    const deleteSuccess = await deleteUser(user.id)
    if (deleteSuccess) {
      onLogoutSuccess()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit user information</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => handleChange('first_name', text)}
        value={user.first_name}
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
      />

      <TextInput
        ref={ref_input2}
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => handleChange('last_name', text)}
        value={user.last_name}
        returnKeyType="next"
        onSubmitEditing={() => ref_input3.current.focus()}
      />

      <TextInput
        ref={ref_input3}
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleChange('username', text)}
        value={user.username}
        returnKeyType="next"
        onSubmitEditing={() => ref_input4.current.focus()}
      />

      <TextInput
        ref={ref_input4}
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleChange('email', text)}
        value={user.email}
        returnKeyType="next"
        onSubmitEditing={() => ref_input5.current.focus()}
      />

      <TextInput
        ref={ref_input5}
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleChange('password', text)}
        value={user.password}
        secureTextEntry={true}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'lightgray' : 'darkgray',
          },
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Edit information</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'lightgray' : 'darkgray',
          },
        ]}
        onPress={checkUserStatus}
      >
        <Text style={styles.buttonText}>Get user info</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'lightgray' : 'darkgray',
          },
        ]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'lightgray' : 'darkgray',
          },
        ]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete account</Text>
      </Pressable>
    </View>
  )
}

Profile.propTypes = {
  onLogoutSuccess: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    color: 'gray',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'darkgray',
    marginHorizontal: 'auto',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Profile
