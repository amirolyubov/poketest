import * as types from '../constants'
import * as api from '../api'

const loadingOn = () => ({ type: types.LOADING_ON })
const loadingOff = () => ({ type: types.LOADING_OFF })

export const getAll = () => dispatch => {
  dispatch(loadingOn())
  api.getAll().then(
    success => {
      dispatch(((data) => ({
        type: types.GET_ALL_SUCCESS,
        payload: data.pokemon
      }))(success))
      dispatch(loadingOff())
    },
    error => {
      dispatch((() => ({
        type: types.GET_ALL_FAILURE
      }))(error))
      dispatch(loadingOff())
    }
  )
}

export const getOne = (id, comparing) => (dispatch, getState) => {
  dispatch(loadingOn())
  api.getOne(id).then(
    success => {
      dispatch(((data) => ({
        type: !comparing ? types.GET_ONE_SUCCESS : comparing === 'first' ? types.GET_FIRST_SUCCESS : types.GET_SECOND_SUCCESS,
        payload: !comparing ? prepareForOne(data) : prepareForCompare(data, comparing, getState().compare.stats.data)
      }))(success))
      dispatch(loadingOff())
    },
    error => {
      dispatch((() => ({
        type: types.GET_ONE_FAILURE
      }))(error))
      dispatch(loadingOff())
    },
  )
}
const prepareForOne = pokemon => ({
  name: pokemon.name,
  avatar: {
    front: pokemon.sprites.front_default,
    back: pokemon.sprites.back_default
  },
  stats: pokemon.stats.map(item => ({ name: item.stat.name, value: item.base_stat })),
  types: pokemon.types.map(item => item.type.name),
  abils: pokemon.abilities.map(item => item.ability.name),
  moves: pokemon.moves.map(item => item.move.name),
})
const prepareForCompare = (pokemon, comparing, compareData) => {
  let data = compareData, obj = {}
  pokemon.stats.map(item => obj[item.stat.name] = item.base_stat)
  data[comparing === 'first' ? 0 : 1] = { key: pokemon.name, label: pokemon.name, values: obj }
  return {
    pokemon: prepareForOne(pokemon),
    stats: {
      variables: pokemon.stats.map(item => ({key: item.stat.name, label: item.stat.name})),
      data: compareData
    }
  }
}
