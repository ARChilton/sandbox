import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import { skipDemo } from '../../../TypewriterDiv/typewriterState'

const ToolbarButton = styled('div') `
width:100%;
max-width:100%;
background:transparent;
height:30px;
cursor: pointer;
:hover{
  background-color:#efefef;
}
:focus{
  outline:none;
}

`

const SkipDemo = ({ onClick }) => (
  <ToolbarButton onClick={onClick}>Skip Demo</ToolbarButton>
)

SkipDemo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(skipDemo()),
})

export default connect(null, mapDispatchToProps)(SkipDemo)
