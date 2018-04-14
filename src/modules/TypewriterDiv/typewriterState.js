const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER'

export const changeQuestionNumber = (questionNumber = 0) => ({
  type: CHANGE_QUESTION_NUMBER,
  payload: { questionNumber },
})

export const initialState = {
  questions: [
    {
      typewriterText: 'Why hire Adam Chilton?',
      typeWidth: '12em',
      duration: 2,
      steps: 24,
      answer: 'He works with the latest technology.',
    },
    {
      typewriterText: 'What experience does he have?',
      typeWidth: '16em',
      duration: 3,
      steps: 32,
      answer: 'He managed a product team to create a front-end platform for the Ministry of Defence in the UK.',
    },
    {
      typewriterText: 'What other experience does he have?',
      typeWidth: '19.2em',
      duration: 4,
      steps: 40,
      answer: 'He created checkpointlive.com from scratch, front and back end. He also created a new website for parcelfly.com, but they haven\'t switched it over yet.',
    },
  ],
  questionNumber: 0,
}

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
