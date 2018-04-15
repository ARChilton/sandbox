import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { connect } from 'react-redux'
import { getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'


const answerStyle = css `
padding:4px 16px;
`

const questionAnswerContainer = css `
width:100%;
background-color:#efefef;
border-radius: 0 3px 3px 0;
`

const answerTitle = css `
width:100%;
font-size:1.2em;
font-weight:bold;
`

const answerText = css `
font-size:1.3em;
`

const PhoneQuestioResponse = ({ className, answer }) => (
  <div className={className}>
    <div className={questionAnswerContainer}>
      <div className={answerStyle}>
        <div className={answerTitle}>Answer:</div>
        <div className={answerText}>
          {answer}
        </div>
      </div>
    </div>
  </div >
)

PhoneQuestioResponse.propTypes = {
  className: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
}

PhoneQuestioResponse.defaultProps = {
  duration: 2,
  delay: 2,
}

const DefaultPhoneQuestioResponse = styled(PhoneQuestioResponse) `

animation: enter;
animation-delay:${props => props.duration + props.delay + 1}s;
animation-duration:1s;
animation-fill-mode: forwards;
opacity:0;

@keyframes enter {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 1;
  }
}
`

DefaultPhoneQuestioResponse.defaultProps = PhoneQuestioResponse.defaultProps

const mapStateToProps = (state) => {
  const questionNumber = getTypewriterQuestionNumber(state)
  const question = getTypewriterQuestions(state)[questionNumber]
  return { ...question, key: questionNumber }
}

export default connect(mapStateToProps)(DefaultPhoneQuestioResponse)
