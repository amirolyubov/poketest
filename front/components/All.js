import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/all.scss';

const Item = ({pokemon}) => (
  <Link className='item' to={`/one/${'vsve'}`}>
    <div>{pokemon.name}</div>
    <div>body</div>
  </Link>
)

class All extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      max: 20
    }
  }
  handleMaxItemsChange({target: {value}}) {
    this.setState({max: value === '' ? 0 : value})
  }
  handleNavButtonsClick(next) {
    const { page, max } = this.state,
          { pokemons } = this.props
    this.setState({
      page: next
            ? page !== Math.ceil(pokemons.length / max) ? page + 1 : page
            : page !== 1 ? page - 1 : page
    })
  }
  render() {
    const { page, max } = this.state,
          { pokemons } = this.props
    return (
      <div className='all_wrapper'>
        <div className='items'>
          { pokemons.map((item, key) => (key <= max * page && key > max * page - max) && <Item pokemon={item} key={key}/>) }
        </div>
        <div className='nav'>
          <button onClick={this.handleNavButtonsClick.bind(this, false)}>prev</button>
          <input value={max} onChange={this.handleMaxItemsChange.bind(this)}/>
          <button onClick={this.handleNavButtonsClick.bind(this, true)}>next</button>
          <span>{max !== 0 && `Page ${page}/${Math.ceil(pokemons.length / max)}`}</span>
        </div>
      </div>
    )
  }
}

export default All
