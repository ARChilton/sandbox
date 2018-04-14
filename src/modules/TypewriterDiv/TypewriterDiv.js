import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import DefaultTypewriterText from './TypewriterText/TypewriterText'
import { getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'


const TypewriterDiv = ({
  className, children, typewriterText, steps, typeWidth, duration, delay, key,
}) => (
  <div className={className}>
    <ReactCSSTransitionGroup transitionName="typewriter" transitionEnter={false} transitionLeave={false}>
      <DefaultTypewriterText key={key} steps={steps} typeWidth={typeWidth} duration={duration} delay={delay} typewriterText={typewriterText}>
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
  steps: PropTypes.number,
  typeWidth: PropTypes.string,
  key: PropTypes.number,
}

TypewriterDiv.defaultProps = {
  children: null,
  typewriterText: null,
  duration: 2,
  delay: 1.5,
  steps: 28,
  typeWidth: '8em',
  key: 999,
}

const DefaultTypewriterDiv = styled(TypewriterDiv) `
  font-family:'Anonymous Pro', monospace;
  font-size:20px;
  width:75%;
  min-height:40px;
  border:1px solid #000;
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
  console.log({ ...question, key: questionNumber })
  return { ...question, key: questionNumber }
  // return {
  //   typewriterText: question.questionText,
  //   key: questionNumber,
  //   duration: question.duration,
  //   steps: question.steps,
  //   delay: question.delay,
  // }
}

export default connect(mapStateToProps)(DefaultTypewriterDiv)

