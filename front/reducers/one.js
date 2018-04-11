import * as types from '../constants'

const initialState = {
  name: '',
  avatar: {
    front: '',
    back: ''
  },
}

const all = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ONE_SUCCESS:
      return {...state, ...action.payload }
    default:
      return state
  }
}

export default all
