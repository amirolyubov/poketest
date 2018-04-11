import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radar from 'react-d3-radar'

import '../styles/one.scss'

class Chart extends Component {
  render () {
    const { stats } = this.props

    return (
      <Radar
        width={500}
        height={500}
        padding={50}
        domainMax={Math.max.apply(null, stats.map(stat => stat.value)) + 10}
        data={{
          variables: stats.map(item => ({key: item.name, label: item.name})),
          sets: stats.map(item => ({
            values: ((_stats, _obj) => {
              _stats.map(stat => _obj[stat.name] = stat.value)
              return _obj
            })(stats, {})
          }))
        }}
        />
    )
  }
}

class One extends Component {
  render () {
    const { pokemon } = this.props
    return (
      <div className='one_wrapper'>
        <div className='face'>
          <h1>{pokemon.name} <button>compare</button></h1>
          <img src={pokemon.avatar.front} />
          <h2>types</h2>
          <div className='labels types'>
            { pokemon.types && pokemon.types.map((type, key) => <span key={key}>{ type }</span>) }
          </div>
          <h2>abilities</h2>
          <div className='labels abils'>
            { pokemon.abils && pokemon.abils.map((abil, key) => <span key={key}>{ abil }</span>) }
          </div>
          <h2>moves</h2>
          <div className='labels moves'>
            { pokemon.moves && pokemon.moves.map((move, key) => <span key={key}>{ move }</span>) }
          </div>
        </div>
        <div className='stats'>
          { pokemon.stats && <Chart stats={pokemon.stats}/> }
        </div>
      </div>
    )
  }
}

export default One
