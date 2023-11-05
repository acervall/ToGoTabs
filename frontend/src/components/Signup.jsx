import { useEffect, useState, useRef } from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  Keyboard,
  SafeAreaView,
} from 'react-native'
import PropTypes from 'prop-types'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { signUp } = useAuth()

  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = () => {
    console.log(formData)

    const userData = {
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
    }

    signUp(userData)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => handleChange('first_name', text)}
          value={formData.first_name}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />

        <TextInput
          ref={ref_input2}
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => handleChange('last_name', text)}
          value={formData.last_name}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
        />

        <TextInput
          ref={ref_input3}
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => handleChange('username', text)}
          value={formData.username}
          returnKeyType="next"
          onSubmitEditing={() => ref_input4.current.focus()}
        />

        <TextInput
          ref={ref_input4}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => handleChange('email', text)}
          value={formData.email}
          returnKeyType="next"
          onSubmitEditing={() => ref_input5.current.focus()}
        />

        <TextInput
          ref={ref_input5}
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => handleChange('password', text)}
          value={formData.password}
          secureTextEntry={true}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  )
}

Signup.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
})

export default Signup
