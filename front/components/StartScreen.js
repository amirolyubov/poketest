import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export default class StartScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sc: 0
    }
  }
  componentDidMount () {
    let windowScrollY = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)
    window.onscroll = (e) => this.setState({
      sc: Math.round(window.pageYOffset / (window.innerHeight / 100) * 10),
    })
  }

  render() {
    const {sc} = this.state
    return (
      <div className={'start'}>
        <div className={'text'} style={{marginLeft: -sc}}><span>M</span><div>I</div>K<div>R</div>A</div>
      </div>
    )
  }
}
