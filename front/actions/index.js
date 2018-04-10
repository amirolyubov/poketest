import * as types from '../constants'
import * as api from '../api'

export const getAll = () => dispatch => {
  dispatch((() => ({ type: types.GET_ALL_PROCESS }))())
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

export const getOne = id => dispatch => {
  dispatch((() => ({ type: types.GET_ONE_PROCESS }))())
  api.getOne(id).then(
    success => dispatch(((data) => ({
      type: types.GET_ONE_SUCCESS,
      payload: data
    }))(success)),
    error => dispatch((() => ({
      type: types.GET_ONE_SUCCESS
    }))(error))
  )
}
