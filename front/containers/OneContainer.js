import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import { One } from '../components'

class OneContainer extends Component {
  componentDidMount () {
    const { actions: { getOne }, match: { params: { pokemon } } } = this.props
    getOne(pokemon)
  }
  render () {
    const { one, actions } = this.props
    return <One pokemon={one} actions={actions}/>
  }
}

const mapStateToProps = state => {
  return {
    one: state.one
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OneContainer))
