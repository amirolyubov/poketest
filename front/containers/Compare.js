import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

class Compare extends Component {
  render () {
    return <div>Compare</div>
  }
}

const mapStateToProps = state => {
  return {
    compare: state.compare
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Compare))
