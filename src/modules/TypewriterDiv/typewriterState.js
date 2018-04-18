import * as answers from './TypewriterAnswers/TypewriterAnswers'

const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'
const SHOW_PHONE_ANSWER = 'SHOW_PHONE_ANSWER'
const CHANGE_RHS_NUMBER = 'CHANGE_RHS_NUMBER'
const SHOW_QUESTION_CONTROLS = 'SHOW_QUESTION_CONTROLS'
const INCREASE_QUESTION_NUMBER = 'INCREASE_QUESTION_NUMBER'
const DECREASE_QUESTION_NUMBER = 'DECREASE_QUESTION_NUMBER'

export const changeQuestionNumber = (questionNumber = 0) => ({
  type: CHANGE_QUESTION_NUMBER,
  payload: { questionNumber },
})

export const togglePhoneAnswer = (showPhoneAnswer = false) => ({
  type: SHOW_PHONE_ANSWER,
  payload: { showPhoneAnswer },
})

export const changeRHSNumber = (rhs = 0) => ({
  type: CHANGE_RHS_NUMBER,
  payload: { rhs },
})

export const showQuestionControls = (questionControls = false) => ({
  type: SHOW_QUESTION_CONTROLS,
  payload: { questionControls },
})

export const increaseQuestionNumber = () => ({
  type: INCREASE_QUESTION_NUMBER,
})

export const decreaseQuestionNumber = () => ({
  type: DECREASE_QUESTION_NUMBER,
})

export const initialState = {
  questions: [
    {
      typewriterText: 'What is the phone for?',
      duration: 2,
      timeOut: 18000,
      answer: answers.A0(),
      no: 0,
    },
    {
      typewriterText: 'Who is Adam Chilton?',
      duration: 1,
      answer: answers.A1(),
      timeOut: 25000,
      no: 1,
    },
    {
      typewriterText: 'What other experience does he have?',
      duration: 3,
      answer: answers.A2(),
      timeOut: 20000,
      no: 2,
    },
  ],
  questionNumber: 0,
  showPhoneAnswer: false,
  rhs: 0,
  questionControls: true,
  automateQuestions: true,
}

const totalQuestionCount = initialState.questions.length

export const autoUpdateQuestionNumber = (questionNumber, timeOut) => (dispatch) => {
  dispatch(togglePhoneAnswer(true))
  return (questionNumber + 1) < totalQuestionCount
    ? setTimeout(() => {
      dispatch(togglePhoneAnswer(false))
      dispatch(changeRHSNumber(questionNumber + 1))
      return dispatch(increaseQuestionNumber())
    }, timeOut)
    : dispatch(showQuestionControls(true))
}

const typewriterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_QUESTION_NUMBER:
    case SHOW_PHONE_ANSWER:
    case CHANGE_RHS_NUMBER:
      return { ...state, ...payload }
    case SHOW_QUESTION_CONTROLS:
      return { ...state, ...payload, automateQuestions: false }
    case INCREASE_QUESTION_NUMBER:
      return state.questionNumber + 1 < state.questions.length
        ? { ...state, questionNumber: state.questionNumber + 1, showPhoneAnswer: false }
        : state
    case DECREASE_QUESTION_NUMBER:
      return { ...state, questionNumber: state.questionNumber - 1, showPhoneAnswer: false }
    default:
      return state
  }
}

export const getTypewriterTextQuestionNumber = state => state.questionNumber

export const getTypewriterTextQuestions = state => state.questions

export const getShowPhoneAnswerState = state => state.showPhoneAnswer

export const getRhsState = state => state.rhs

export const getQuestionControlState = state => state.questionControls

export const getAutomateQuestions = state => state.automateQuestions

export default typewriterReducer
