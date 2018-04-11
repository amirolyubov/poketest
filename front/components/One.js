import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radar from 'react-d3-radar'

class Chart extends Component {
  render () {
    const { stats } = this.props

    return (
      <Radar
        width={500}
        height={500}
        padding={70}
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
    console.log(pokemon);
    return (
      <div className='one_wrapper'>
        <div className='face'>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.avatar.front} />
        </div>
        {pokemon.stats && <Chart stats={pokemon.stats}/>}
      </div>
    )
  }
}

export default One
