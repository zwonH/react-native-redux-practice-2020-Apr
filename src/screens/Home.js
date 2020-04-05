import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import store, { SET_IS_LOADED } from '../store'
import { connect } from 'react-redux'

const Home = props => {
  console.log(`Home props: ${props}`)
  const { isLoaded } = props
  return (
    <View>
      <TouchableOpacity
        style={{ width: 200, height: 200, backgroundColor: 'blue' }}
        onPress={() => {
          console.log('hi')
        }}
      >
        <Text>{isLoaded ? 'true' : 'false'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  return { isLoaded: state.isLoaded }
}

export default connect(mapStateToProps)(Home)
