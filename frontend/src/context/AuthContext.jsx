import React, { createContext, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const signUp = async (userData) => {
    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (response.status === 201) {
        console.log('User added successfully')
        return true
      } else {
        console.error('Failed to add user')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      })

      if (response.status === 200) {
        const data = await response.json()
        if (data.length === 1) {
          await AsyncStorage.setItem('loggedIn', true)
          await AsyncStorage.setItem('userData', JSON.stringify(data[0]))
          return true
        }
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const updateUser = async (userData) => {
    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (response.status === 201) {
        const data = await response.json()
        console.log('User information updated successfully')
        await AsyncStorage.setItem('userData', JSON.stringify(data.user))
        return true
      } else {
        console.error('Failed to update user information')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('loggedIn')
      await AsyncStorage.removeItem('userData')
      return true
    } catch (error) {
      console.error('Error removing user data:', error)
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch('/api/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (response.status === 201) {
        console.log('User deleted successfully')
        await AsyncStorage.removeItem('loggedIn')
        await AsyncStorage.removeItem('userData')
        return true
      } else {
        console.error('Failed to delete user')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  return (
    <AuthContext.Provider value={{ login, logout, signUp, updateUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
}
