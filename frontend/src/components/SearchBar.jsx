import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a route"
        placeholderTextColor="gray"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
  },
  searchInput: {
    padding: 10,
  },
})

export default SearchBar
