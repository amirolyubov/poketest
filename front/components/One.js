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
          <h1>{pokemon.name}</h1>
          <img src={pokemon.avatar.front} />
          <div className='types'>
            { pokemon.types && pokemon.types.map(type => <span>{type}</span>) }
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
