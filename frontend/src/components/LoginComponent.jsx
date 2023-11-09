import { useState, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { useAuth } from '../context/AuthContext'

const LoginComponent = ({ onLoginSuccess }) => {
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const ref_input = useRef()

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = async () => {
    const loginSuccess = await login(formData.email, formData.password)
    if (loginSuccess) {
      onLoginSuccess()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleChange('email', text)}
        value={formData.email}
        returnKeyType="next"
        onSubmitEditing={() => ref_input.current.focus()}
      />

      <TextInput
        ref={ref_input}
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

LoginComponent.propTypes = {
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

export default LoginComponent
