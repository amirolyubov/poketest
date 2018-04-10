import React, { Component } from 'react'
import cn from 'classnames'

export default class Archive extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  renderItem(item, key) {
    return (
      <div className={'item'} key={key}>
        {item}
      </div>
    )
  }
  render() {
    const { archive } = this.props
    return (
      <div className={'archive'}>
        <span>Архив</span>
        <div className={'items'}>
          { archive.map((item, key) => this.renderItem(item, key)) }
        </div>
        <hr></hr>
      </div>
    )
  }
}
