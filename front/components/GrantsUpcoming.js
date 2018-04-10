import React, { Component } from 'react'
import cn from 'classnames'

export default class GrantsUpcoming extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  renderGrant(grant, key) {
    return (
      <div className={'grant'} key={key} style={{backgroundImage: 'url(' + grant.image + ')'}}>
        <div className={'header'}>{grant.title}</div>
        <div className={'text'}>{grant.description}</div>
      </div>
    )
  }
  render() {
    const { grants } = this.props
    return (
      <div className={'upcoming'}>
        <div className={'grants'}>
          { grants.map((grant, key) => this.renderGrant(grant, key)) }
        </div>
        <hr></hr>
      </div>
    )
  }
}
