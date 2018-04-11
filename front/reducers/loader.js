import * as types from '../constants'

const initialState = false

const all = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ON:
      return true
    case types.LOADING_OFF:
      return false
    default:
      return state
  }
}

export default all
