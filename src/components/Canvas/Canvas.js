import styled from 'react-emotion'
// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Canvas extends Component {
  componentDidMount() {
    const canvas = this.canvas
    const ctx = canvas.getContext('2d')
    ctx.fillRect(100, 100, 100, 100)
  }


  render() {
    return (
      <div>
        <canvas ref={(c) => { this.canvas = c }} />
      </div>
    )
  }
}


const DefaultCanvas = styled(Canvas) `
border:10px black solid;
background-color:red;
margin:40px;
width: ${props => props.w};
height: ${props => props.h};
`
export default DefaultCanvas
