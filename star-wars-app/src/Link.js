import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <a href={this.props.address}>Click</a>
    )
  }
}

export default Link
