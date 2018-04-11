import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import { All, Loader } from '../components'

class AllContainer extends Component {
  componentDidMount () {
    const { actions: { getAll } } = this.props
    getAll()
  }
  render () {
    const { loader, all } = this.props
    return loader ? <Loader /> : <All pokemons={all}/>
  }
}

const mapStateToProps = state => {
  return {
    all: state.all,
    loader: state.loader
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllContainer))
