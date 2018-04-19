import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import typewriter, { getTypewriterTextQuestionNumber, getTypewriterTextQuestions, getShowPhoneAnswerState, getRhsState, getQuestionControlState, getAutomateQuestions, getShowQuestions, getShowRestOfSite } from '../modules/TypewriterDiv/typewriterState'
import restOfSite, { getDesignImageArray, getDesignImagePreview } from '../Routes/Sandbox/RestOfSite/RestOfSiteState'
// import { reducer as form } from 'redux-form'


export default () => combineReducers({
  router: routerReducer,
  typewriter,
  restOfSite,

  // form,
})

// Selectors

export const getTypewriterQuestionNumber = state => getTypewriterTextQuestionNumber(state.typewriter)

export const getTypewriterQuestions = state => getTypewriterTextQuestions(state.typewriter)

export const getPhoneAnswerState = state => getShowPhoneAnswerState(state.typewriter)

export const getRHSState = state => getRhsState(state.typewriter)

export const getShowQuestionControlState = state => getQuestionControlState(state.typewriter)

export const getAutomateQuestionsState = state => getAutomateQuestions(state.typewriter)

export const getShowQuestionsState = state => getShowQuestions(state.typewriter)

export const getShowRestOfSiteState = state => getShowRestOfSite(state.typewriter)

export const getDesignImagesArrayState = state => getDesignImageArray(state.restOfSite)

export const getDesignImagePreviewState = state => getDesignImagePreview(state.restOfSite)
