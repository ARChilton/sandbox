/* eslint react/no-unused-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Typist from 'react-typist'
import { connect } from 'react-redux'
import 'react-typist/dist/Typist.css'
import { autoUpdateQuestionNumber, togglePhoneAnswer } from '../typewriterState'
import { phoneSurrondToScreenOnlySwitch } from '../../devices/IPhoneX/IPhoneXComponents/IPhoneXComponents'


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
  automateQuestions: PropTypes.bool,
}

TypewriterText.defaultProps = {
  typewriterText: 'Default message',
  duration: 4,
  delay: 1,
  children: null,
  onTypingDone: null,
  automateQuestions: true,
}


const DefaultTypewriterText = styled(TypewriterText) `
  font-family:'Anonymous Pro', monospace;
  font-size:1em;
  line-height:1.5em;
  color:red;
  z-index:2;
  overflow: hidden;
  @media(max-width:${`${phoneSurrondToScreenOnlySwitch}px`}){
    font-size:16px;
    line-height:20px;
  }
 
`
DefaultTypewriterText.defaultProps = TypewriterText.defaultProps

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTypingDone: () => (ownProps.automateQuestions ?
    dispatch(autoUpdateQuestionNumber(ownProps.no, ownProps.timeOut))
    : dispatch(togglePhoneAnswer(true))
  ),
})

export default connect(null, mapDispatchToProps)(DefaultTypewriterText)
