import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import DefaultTypewriterText from './TypewriterText/TypewriterText'
import { getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'


const TypewriterDiv = ({
  className, children, typewriterText, duration, delay, key, no, timeOut,
}) => (
  <div className={className}>
    <ReactCSSTransitionGroup transitionName="typewriter" transitionEnter={false} transitionLeave={false}>
      <DefaultTypewriterText key={key} no={no} timeOut={timeOut} duration={duration} delay={delay} typewriterText={typewriterText}>
        {children}
      </DefaultTypewriterText>
    </ReactCSSTransitionGroup>
  </div>
)

TypewriterDiv.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  typewriterText: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  key: PropTypes.number,
  no: PropTypes.number,
  timeOut: PropTypes.number,
}

TypewriterDiv.defaultProps = {
  children: null,
  typewriterText: null,
  duration: 2,
  delay: 1.5,
  key: 999,
  no: 0,
  timeOut: 15000,
}

const DefaultTypewriterDiv = styled(TypewriterDiv) `
  font-family:'Anonymous Pro', monospace;
  font-size:20px;
  width:90%;
  min-height:40px;
  border:1px solid #eee;
  padding:4px 8px;
  margin:20px auto;
  /* height:40px; */
  line-height:40px;
  display: block;
  background-color:#fff;
`

const mapStateToProps = (state) => {
  const questionNumber = getTypewriterQuestionNumber(state)
  const question = getTypewriterQuestions(state)[questionNumber]
  return { ...question, key: questionNumber }
}

export default connect(mapStateToProps)(DefaultTypewriterDiv)

