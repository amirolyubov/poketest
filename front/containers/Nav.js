import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <div>
        <Link to={'/'}>All</Link>
        <Link to={'/graphics'}>Graphics</Link>
      </div>
    )
  }
}

export default withRouter(Nav)
