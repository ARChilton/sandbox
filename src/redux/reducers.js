import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import typewriter, { getTypewriterTextQuestionNumber, getTypewriterTextQuestions, getShowPhoneAnswerState, getQuestionsSeen, getQuestionControlState, getAutomateQuestions, getShowQuestions, getShowRestOfSite, getdesignCreateReleaseShowAfter } from '../modules/TypewriterDiv/typewriterState'
import restOfSite, { getDesignImageArray, getDesignImagePreview, getPortfolioArray, getPortfolioPreview, getSearchEngineArray, getSearchEngineInput } from '../Routes/Sandbox/RestOfSite/RestOfSiteState'
// import { reducer as form } from 'redux-form'


export default () => combineReducers({
  router: routerReducer,
  typewriter,
  restOfSite,

  // form,
})

// Selectors

// Typewriter

export const getTypewriterQuestionNumber = state => getTypewriterTextQuestionNumber(state.typewriter)

export const getTypewriterQuestions = state => getTypewriterTextQuestions(state.typewriter)

export const getPhoneAnswerState = state => getShowPhoneAnswerState(state.typewriter)

export const getQuestionsSeenState = state => getQuestionsSeen(state.typewriter)

export const getdesignCreateReleaseShowAfterState = state => getdesignCreateReleaseShowAfter(state.typewriter)

export const getShowQuestionControlState = state => getQuestionControlState(state.typewriter)

export const getAutomateQuestionsState = state => getAutomateQuestions(state.typewriter)

export const getShowQuestionsState = state => getShowQuestions(state.typewriter)

export const getShowRestOfSiteState = state => getShowRestOfSite(state.typewriter)

// Rest Of Site

export const getDesignImagesArrayState = state => getDesignImageArray(state.restOfSite)

export const getDesignImagePreviewState = state => getDesignImagePreview(state.restOfSite)

export const getPortfolioArrayState = state => getPortfolioArray(state.restOfSite)

export const getPortfolioPreviewState = state => getPortfolioPreview(state.restOfSite)

export const getSearchEngineArrayState = state => getSearchEngineArray(state.restOfSite)

export const getSearchEngineInputState = state => getSearchEngineInput(state.restOfSite)
