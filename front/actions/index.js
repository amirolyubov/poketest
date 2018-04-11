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

export const getOne = id => dispatch => {
  dispatch(loadingOn())
  api.getOne(id).then(
    success => {
      dispatch(((data) => ({
        type: types.GET_ONE_SUCCESS,
        payload: preparePokemonData(data)
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
const preparePokemonData = pokemon => ({
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
