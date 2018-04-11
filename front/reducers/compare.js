import * as types from '../constants'

const initialState = {
  first: {
    avatar: {}
  },
  second: {
    avatar: {}
  },
  stats: {
    variables: [],
    data: new Array(2).fill({values: {}})
  }
}

const compare = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FIRST_SUCCESS:
      return {
        ...state,
        first: action.payload.pokemon,
        stats: action.payload.stats
      }
    case types.GET_SECOND_SUCCESS:
      return {
        ...state,
        second: action.payload.pokemon,
        stats: action.payload.stats
      }
    default:
      return state
  }
}

export default compare
