import * as answers from './TypewriterAnswers/TypewriterAnswers'

const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'
const SHOW_PHONE_ANSWER = 'SHOW_PHONE_ANSWER'
const CHANGE_RHS_NUMBER = 'CHANGE_RHS_NUMBER'
const SHOW_QUESTION_CONTROLS = 'SHOW_QUESTION_CONTROLS'
const INCREASE_QUESTION_NUMBER = 'INCREASE_QUESTION_NUMBER'
const DECREASE_QUESTION_NUMBER = 'DECREASE_QUESTION_NUMBER'
const SHOW_QUESTIONS = 'SHOW_QUESTIONS'
const SHOW_REST_OF_SITE = 'SHOW_REST_OF_SITE'

export const changeQuestionNumber = (questionNumber = 0) => ({
  type: CHANGE_QUESTION_NUMBER,
  payload: { questionNumber },
})

export const togglePhoneAnswer = (showPhoneAnswer = false) => ({
  type: SHOW_PHONE_ANSWER,
  payload: { showPhoneAnswer },
})

export const changeRHSNumber = (questionsSeen = 0) => ({
  type: CHANGE_RHS_NUMBER,
  payload: { questionsSeen },
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

export const toggleShowQuestions = (showQuestions = true) => ({
  type: SHOW_QUESTIONS,
  payload: { showQuestions },
})

export const toggleShowRestOfSite = (showRestOfSite = true) => ({
  type: SHOW_REST_OF_SITE,
  payload: { showRestOfSite },
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
      typewriterText: 'What experience does he have?',
      duration: 3,
      answer: answers.A2(),
      timeOut: 20000,
      no: 2,
    },
  ],
  questionNumber: 0,
  showQuestions: true,
  showPhoneAnswer: false,
  questionsSeen: 0,
  questionControls: true,
  automateQuestions: true,
  showRestOfSite: true, // TODO set false
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
    : () => {
      dispatch(showQuestionControls(true))
      return dispatch(toggleShowRestOfSite(true))
    }
}

export const firstLoad = () => (dispatch) => {
  console.log('firstload')
  return setTimeout(() => dispatch(toggleShowQuestions(true)), 1000)
}

const typewriterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_QUESTION_NUMBER:
    case SHOW_PHONE_ANSWER:
    case CHANGE_RHS_NUMBER:
    case SHOW_QUESTIONS:
    case SHOW_REST_OF_SITE:
      return { ...state, ...payload }

    case SHOW_QUESTION_CONTROLS:
      return { ...state, ...payload, automateQuestions: false }

    case INCREASE_QUESTION_NUMBER:
      return state.questionNumber + 1 < state.questions.length
        ? {
          ...state, questionNumber: state.questionNumber + 1, showPhoneAnswer: false, questionsSeen: 2,
        }
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

export const getRhsState = state => state.questionsSeen

export const getQuestionControlState = state => state.questionControls

export const getAutomateQuestions = state => state.automateQuestions

export const getShowQuestions = state => state.showQuestions

export const getShowRestOfSite = state => state.showRestOfSite

export default typewriterReducer
