import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const signUp = async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (response.status === 201) {
        console.log('User added successfully')
        login(userData.username, userData.password)
      } else {
        console.error('Failed to add user')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const login = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.status === 200) {
        const data = await response.json()
        setLoggedIn(true)
        setUser(data.user)
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const logout = () => {
    setLoggedIn(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}
