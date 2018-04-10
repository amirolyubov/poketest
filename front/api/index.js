const url = 'https://pokeapi.co/api'

export const getAll = () => fetch(`${url}/v1/pokedex/1`)
                            .then(responce => responce.json())
