import * as answers from './TypewriterAnswers/TypewriterAnswers'

const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'
const SHOW_PHONE_ANSWER = 'SHOW_PHONE_ANSWER'

export const changeQuestionNumber = (questionNumber = 0) => ({
  type: CHANGE_QUESTION_NUMBER,
  payload: { questionNumber },
})

export const togglePhoneAnswer = (showPhoneAnswer = false) => ({
  type: SHOW_PHONE_ANSWER,
  payload: { showPhoneAnswer },
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
    {
      typewriterText: 'Hey Kat, thank you for watching to the end, here is your prize ;)',
      duration: 3,
      answer: answers.A3(),
      timeOut: 20000,
      no: 3,
    },
  ],
  questionNumber: 0,
  showPhoneAnswer: false,
}

const totalQuestionCount = initialState.questions.length

export const autoUpdateQuestionNumber = (questionNumber, timeOut) => (dispatch) => {
  dispatch(togglePhoneAnswer(true))
  return (questionNumber + 1) < totalQuestionCount
    ? setTimeout(() => {
      dispatch(togglePhoneAnswer(false))
      return dispatch(changeQuestionNumber(questionNumber + 1))
    }, timeOut)
    : null
}

const typewriterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_QUESTION_NUMBER:
    case SHOW_PHONE_ANSWER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const getTypewriterTextQuestionNumber = state => state.questionNumber

export const getTypewriterTextQuestions = state => state.questions

export const getShowPhoneAnswerState = state => state.showPhoneAnswer

export const getRhsState = state => state.rhs

export default typewriterReducer
