import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import store, { SET_IS_LOADED } from '../store'
import { connect } from 'react-redux'

const Home = props => {
  console.log(`Home props: ${props}`)
  const { isLoaded, toggleIsLoaded } = props
  return (
    <View>
      <TouchableOpacity
        style={{ width: 200, height: 200, backgroundColor: 'blue' }}
        onPress={() => {
          toggleIsLoaded(!isLoaded)
          console.log(isLoaded)
        }}
      >
        <Text style={{ color: 'white', fontSize: 50 }}>
          {isLoaded ? 'true' : 'false'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  return { isLoaded: state.isLoaded }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleIsLoaded: isLoaded => {
      dispatch({ type: SET_IS_LOADED, isLoaded })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
