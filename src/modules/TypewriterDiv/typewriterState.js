import * as answers from './TypewriterAnswers/TypewriterAnswers'

const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'

export const changeQuestionNumber = (questionNumber = 0) => ({
  type: CHANGE_QUESTION_NUMBER,
  payload: { questionNumber },
})


export const initialState = {
  questions: [
    {
      typewriterText: 'Who should I contact about a new website?',
      duration: 2,
      timeOut: 15000,
      answer: answers.A0(),
      no: 0,
    },
    {
      typewriterText: 'Who is Adam Chilton?',
      duration: 1,
      answer: answers.A1(),
      timeOut: 25000,
      no: 1,
      // onTypingDone: ()=>autoUpdateQuestionNumber()
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
}

const totalQuestionCount = initialState.questions.length

export const autoUpdateQuestionNumber = (questionNumber, timeOut) => dispatch => ((questionNumber + 1) < totalQuestionCount
  ? setTimeout(() => dispatch(changeQuestionNumber(questionNumber + 1)), timeOut)
  : null)

const typewriterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_QUESTION_NUMBER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const getTypewriterTextQuestionNumber = state => state.questionNumber

export const getTypewriterTextQuestions = state => state.questions

export default typewriterReducer
