import React, { Component } from 'react'
import Radar from 'react-d3-radar'
import '../styles/compare.scss'

class Compare extends Component {
  render () {
    const { compare: { first, second, stats: { variables, data } } } = this.props
    return (
      <div className='compare_wrapper'>
        <div className='pane'>
          <h1>{ first.name }</h1>
          <img src={first.avatar.front} />
        </div>
        <div className='chart'>
          {variables.length !== 0 && <Radar
            width={500}
            height={500}
            padding={50}
            domainMax={140}
            data={{
              variables: variables,
              sets: data
            }}
            />}
        </div>
        <div className='pane'>
          <h1>{ second.name }</h1>
          <img src={second.avatar.front} />
        </div>
      </div>
    )
  }
}

export default Compare
