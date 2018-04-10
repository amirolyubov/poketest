import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

class GraphicsContainer extends Component {
  render () {
    return <div>Graphics</div>
  }
}

const mapStateToProps = state => {
  return {
    graphics: state.graphics
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GraphicsContainer))
