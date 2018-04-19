import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { connect } from 'react-redux'
import { getTypewriterQuestionNumber, getTypewriterQuestions, getPhoneAnswerState } from '../../redux/reducers'
import Chip from '../Chip/Chip'
import chipImg from './me.jpg'
import StarRating from '../StarRating/StarRating'


const answerStyle = css `
padding:4px 16px;
`

const questionAnswerContainer = css `
width:100%;
background-color:#fff;
padding-top:8px;
border-radius: 0 3px 3px 0;
`

const answerText = css `
font-size:1.3em;
`


const PhoneQuestioResponse = ({
  className, answer, showPhoneAnswer,
}) => (showPhoneAnswer
  ? (
    <div className={className}>
      <div className={questionAnswerContainer}>
        <div className={answerStyle}>
          <StarRating stars={5} />
          <Chip src={chipImg}>Adam Chilton</Chip>
          <div className={answerText}>
            {answer}
          </div>
        </div>
      </div>
    </div >
  )
  : null)

PhoneQuestioResponse.propTypes = {
  className: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  showPhoneAnswer: PropTypes.bool.isRequired,

}

PhoneQuestioResponse.defaultProps = {
  duration: 2,
  delay: 2,
}

const DefaultPhoneQuestioResponse = styled(PhoneQuestioResponse) `
animation: enter;
animation-delay:0.5s;
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
  return {
    ...question, key: questionNumber, showPhoneAnswer: getPhoneAnswerState(state),
  }
}

export default connect(mapStateToProps)(DefaultPhoneQuestioResponse)
