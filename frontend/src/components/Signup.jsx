import { useState, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { useAuth } from '../context/AuthContext'

const Signup = ({ onLoginSuccess }) => {
  const { signUp, login } = useAuth()

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

  const handleSubmit = async () => {
    console.log(formData)

    const userData = {
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
    }

    const signupSuccess = await signUp(formData)
    if (signupSuccess) {
      const loginSuccess = await login(userData.email, userData.password)
      if (loginSuccess) {
        onLoginSuccess()
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
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
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'lightgray' : 'darkgray',
          },
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  )
}

Signup.propTypes = {
  onLoginSuccess: PropTypes.func,
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

export default Signup
