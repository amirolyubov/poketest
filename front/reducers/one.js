import * as types from '../constants'

const initialState = {}

const all = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ONE_SUCCESS:
      return {...state, ...action.payload }
    default:
      return state
  }
}

export default all
