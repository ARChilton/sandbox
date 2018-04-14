import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import typewriter, { getTypewriterTextQuestionNumber, getTypewriterTextQuestions } from '../modules/TypewriterDiv/typewriterState'
// import { reducer as form } from 'redux-form'


export default () => combineReducers({
  router: routerReducer,
  typewriter,

  // form,
})


export const getTypewriterQuestionNumber = state => getTypewriterTextQuestionNumber(state.typewriter)

export const getTypewriterQuestions = state => getTypewriterTextQuestions(state.typewriter)
