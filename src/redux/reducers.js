import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import typewriter, { getTypewriterTextQuestionNumber, getTypewriterTextQuestions, getShowPhoneAnswerState, getRhsState, getQuestionControlState, getAutomateQuestions } from '../modules/TypewriterDiv/typewriterState'
// import { reducer as form } from 'redux-form'


export default () => combineReducers({
  router: routerReducer,
  typewriter,

  // form,
})

// Selectors

export const getTypewriterQuestionNumber = state => getTypewriterTextQuestionNumber(state.typewriter)

export const getTypewriterQuestions = state => getTypewriterTextQuestions(state.typewriter)

export const getPhoneAnswerState = state => getShowPhoneAnswerState(state.typewriter)

export const getRHSState = state => getRhsState(state.typewriter)

export const getShowQuestionControlState = state => getQuestionControlState(state.typewriter)

export const getAutomateQuestionsState = state => getAutomateQuestions(state.typewriter)
