import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import cn from 'classnames'

export default class StartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNews: 0
    }
  }

  handleNewsClick() {
    const { news } = this.props
    this.setState({
      currentNews: this.state.currentNews == news.length - 1 ? 0 : this.state.currentNews + 1,
    })
  }

  renderOne() {
    const { news } = this.props
    const { currentNews } = this.state
    return (
      <div className={cn('one', currentNews % 2 == 0 ? 'fade' : 'fade_fake')}>
        <div className={'title'}>{news[currentNews].title}</div>
        <div className={'body'}>{news[currentNews].body}</div>
      </div>
    )
  }
  renderLoader() {
    const { news } = this.props
    const { currentNews } = this.state
    return (
      <div className={'loader'} style={{width: ((100 * (currentNews + 1)) / news.length) + '%'}}></div>
    )
  }
  render() {
    return (
      <div className={'news'} onClick={this.handleNewsClick.bind(this)}>
        {this.renderOne()}
        {this.renderLoader()}
      </div>
    )
  }
}
