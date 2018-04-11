import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { Compare, Loader } from '../components'

class CompareContainer extends Component {
  componentDidMount () {
    const { match: { params: { firstId, secondId } }, actions: { getOne } } = this.props
    firstId !== 'unselected' && getOne(firstId, 'first')
    secondId !== 'unselected' && getOne(secondId, 'second')
  }
  render () {
    const { loader, actions, compare } = this.props
    return loader ? <Loader /> : <Compare compare={compare} actions={actions} />
  }
}

const mapStateToProps = state => {
  return {
    compare: state.compare,
    loader: state.loader
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompareContainer))
