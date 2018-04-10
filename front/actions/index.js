import * as types from '../constants'
import * as api from '../api'

export const getAll = () => dispatch => {
  dispatch((() => ({
    type: types.GET_ALL_PROCESS
  }))())
  api.getAll().then(
    success => dispatch(((data) => ({
      type: types.GET_ALL_SUCCESS,
      payload: data.pokemon
    }))(success)),
    error => dispatch((() => ({
      type: types.GET_ALL_FAILURE
    }))(error))
  )
}
