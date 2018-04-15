/* eslint react/no-unused-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Typist from 'react-typist'
import { connect } from 'react-redux'
import 'react-typist/dist/Typist.css'
import { autoUpdateQuestionNumber } from '../typewriterState'


const TypewriterText = ({ className, typewriterText, onTypingDone }) => (
  <Typist className={className} onTypingDone={onTypingDone}>
    {typewriterText}
  </Typist>
)

TypewriterText.propTypes = {
  className: PropTypes.string.isRequired,
  typewriterText: PropTypes.string,
  children: PropTypes.node,
  duration: PropTypes.number,
  delay: PropTypes.number,
  typeWidth: PropTypes.string,
  onTypingDone: PropTypes.func,
}

TypewriterText.defaultProps = {
  typewriterText: 'Default message',
  duration: 4,
  delay: 1,
  children: null,
  onTypingDone: null,
}


const DefaultTypewriterText = styled(TypewriterText) `
  font-family:'Anonymous Pro', monospace;
  font-size:1em;
  color:red;
  z-index:2;
  overflow: hidden;
 
`
DefaultTypewriterText.defaultProps = TypewriterText.defaultProps

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTypingDone: () => dispatch(autoUpdateQuestionNumber(ownProps.no, ownProps.timeOut)),
})

export default connect(null, mapDispatchToProps)(DefaultTypewriterText)
