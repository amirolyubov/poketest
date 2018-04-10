import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Item = item => (
  <Link to={`/one/${'vsve'}`}>
    <div>name</div>
    <div>body</div>
  </Link>
)

class All extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      max: 10
    }
  }
  render() {
    return (
      <div>
        { this.props.pokemons.map((item, key) => key < this.state.max && <Item key={key}/>) }
      </div>
    )
  }
}

export default All
