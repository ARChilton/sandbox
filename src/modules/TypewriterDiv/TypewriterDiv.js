import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import DefaultTypewriterText from './TypewriterText/TypewriterText'
import { getTypewriterQuestionNumber, getTypewriterQuestions, getAutomateQuestionsState, getShowQuestionsState } from '../../redux/reducers'


const TypewriterDiv = ({
  className, children, typewriterText, no, timeOut, automateQuestions, showQuestions,
}) => (showQuestions ?
  (
    <div className={className}>
      <DefaultTypewriterText no={no} timeOut={timeOut} typewriterText={typewriterText} automateQuestions={automateQuestions}>
        {children}
      </DefaultTypewriterText>
    </div>
  ) : null)


TypewriterDiv.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  typewriterText: PropTypes.string,
  no: PropTypes.number,
  timeOut: PropTypes.number,
  automateQuestions: PropTypes.bool.isRequired,
  showQuestions: PropTypes.bool,
}

TypewriterDiv.defaultProps = {
  children: null,
  typewriterText: null,
  no: 0,
  timeOut: 15000,
  showQuestions: true,
}

const DefaultTypewriterDiv = styled(TypewriterDiv) `
  font-family:'Anonymous Pro', monospace;
  font-size:20px;
  width:96%;
  min-height:40px;
  /* border:1px solid #eee; */
  padding:4px 8px;
  margin:10px auto;
  /* height:40px; */
  line-height:40px;
  display: block;
  background-color:#fff;
`

const mapStateToProps = (state) => {
  const questionNumber = getTypewriterQuestionNumber(state)
  const question = getTypewriterQuestions(state)[questionNumber]
  return {
    ...question,
    key: questionNumber,
    automateQuestions: getAutomateQuestionsState(state),
    showQuestions: getShowQuestionsState(state),
  }
}

export default connect(mapStateToProps)(DefaultTypewriterDiv)

