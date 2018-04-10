import React from 'react'
import { Link } from 'react-router-dom'

const Item = item => (
  <Link to={`/one/${'vsve'}`}>
    <div>name</div>
    <div>body</div>
  </Link>
)

const All = ({ pokemons }) => (
  <div>
    { pokemons.map((item, key) => <Item key={key}/>) }
  </div>
)

export default All
