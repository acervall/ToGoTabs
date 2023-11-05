import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AuthProvider } from './src/context/AuthContext'
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Signup" component={SignupScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}
