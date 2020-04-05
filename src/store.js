import { createStore } from 'redux'

const initialState = {
  isLoaded: false
}

export const SET_IS_LOADED = 'SET_IS_LOADED'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADED:
      return { ...state, isLoaded: action.isLoaded }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
