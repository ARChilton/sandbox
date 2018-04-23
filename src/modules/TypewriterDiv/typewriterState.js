import * as answers from './TypewriterAnswers/TypewriterAnswers'

const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'
const SHOW_PHONE_ANSWER = 'SHOW_PHONE_ANSWER'
const CHANGE_RHS_NUMBER = 'CHANGE_RHS_NUMBER'
const SHOW_QUESTION_CONTROLS = 'SHOW_QUESTION_CONTROLS'
const INCREASE_QUESTION_NUMBER = 'INCREASE_QUESTION_NUMBER'
const DECREASE_QUESTION_NUMBER = 'DECREASE_QUESTION_NUMBER'
const SHOW_QUESTIONS = 'SHOW_QUESTIONS'
const SHOW_REST_OF_SITE = 'SHOW_REST_OF_SITE'
const INCREASE_QUESTIONS_SEEN = 'INCREASE_QUESTIONS_SEEN'
const SKIP_DEMO = 'SKIP_DEMO'


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

export const increaseQuestionsSeen = () => ({
  type: INCREASE_QUESTIONS_SEEN,
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

export const skipDemo = () => ({
  type: SKIP_DEMO,
})

export const initialState = {
  questions: [
    {
      typewriterText: 'Why is there a phone in the centre of the screen?',
      duration: 2,
      timeOut: 18000,
      answer: answers.A0(),
      no: 0,
    },
    {
      typewriterText: 'Who is Adam Chilton?',
      duration: 1,
      answer: answers.A1(),
      timeOut: 18000,
      no: 1,
    },
    {
      typewriterText: 'What services does Adam provide?',
      duration: 3,
      answer: answers.A2(),
      timeOut: 18000,
      no: 2,
    },
    {
      typewriterText: 'What other experience does Adam have?',
      duration: 3,
      answer: answers.A3(),
      timeOut: 18000,
      no: 3,
    },
    {
      typewriterText: 'What experience in the topic area does Adam have?',
      duration: 3,
      answer: answers.A4(),
      timeOut: 18000,
      no: 3,
    },
    {
      typewriterText: 'Thank you for reading these questions and answers.',
      duration: 3,
      answer: answers.A5(),
      timeOut: 100,
      no: 5,
    },
  ],
  questionNumber: 0,
  showQuestions: true,
  showPhoneAnswer: false,
  questionsSeen: 0,
  designCreateReleaseShowAfter: 1,
  questionControls: true,
  automateQuestions: true,
  showRestOfSite: false,
}

const totalQuestionCount = initialState.questions.length
let autoTimeOut = null

export const autoUpdateQuestionNumber = (questionNumber, timeOut) => (dispatch) => {
  dispatch(togglePhoneAnswer(true))
  clearTimeout(autoTimeOut) // clears the previous timers
  const updater = questionNumber === (totalQuestionCount - 1)
    ? Promise.resolve().then(() => {
      dispatch(showQuestionControls(true))
      return dispatch(toggleShowRestOfSite(true))
    })

    : autoTimeOut = setTimeout(() => {
      dispatch(togglePhoneAnswer(false))
      dispatch(increaseQuestionsSeen())
      return dispatch(increaseQuestionNumber())
    }, timeOut)

  return updater
}

export const firstLoad = () => dispatch => setTimeout(() => dispatch(toggleShowQuestions(true)), 1000)

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

    case SKIP_DEMO:
      return { ...state, questionsSeen: state.designCreateReleaseShowAfter + 1, showRestOfSite: true }

    case INCREASE_QUESTION_NUMBER: {
      window.clearTimeout(autoTimeOut)
      const newQuestionsSeen = state.questionsSeen < state.questionNumber + 1 ? state.questionNumber + 1 : state.questionsSeen
      return state.questionNumber + 1 < state.questions.length
        ? {
          ...state, questionNumber: state.questionNumber + 1, showPhoneAnswer: false, questionsSeen: newQuestionsSeen,
        }
        : state
    }
    case DECREASE_QUESTION_NUMBER:
      return { ...state, questionNumber: state.questionNumber - 1, showPhoneAnswer: false }
    case INCREASE_QUESTIONS_SEEN:
      return { ...state, questionsSeen: state.questionsSeen + 1 }
    default:
      return state
  }
}

export const getTypewriterTextQuestionNumber = state => state.questionNumber

export const getTypewriterTextQuestions = state => state.questions

export const getShowPhoneAnswerState = state => state.showPhoneAnswer

export const getQuestionsSeen = state => state.questionsSeen

export const getdesignCreateReleaseShowAfter = state => state.designCreateReleaseShowAfter

export const getQuestionControlState = state => state.questionControls

export const getAutomateQuestions = state => state.automateQuestions

export const getShowQuestions = state => state.showQuestions

export const getShowRestOfSite = state => state.showRestOfSite

export default typewriterReducer
