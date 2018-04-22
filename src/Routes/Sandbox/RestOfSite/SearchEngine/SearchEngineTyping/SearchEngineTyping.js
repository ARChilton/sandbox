import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import Typist from 'react-typist'
import { automateSearchEngineInputs } from '../../RestOfSiteState'

const SearchEngineTyping = ({ children, no, onTypingDone }) => (
  <Typist no={no} key={no} onTypingDone={onTypingDone}>
    {children}
  </Typist>
)

SearchEngineTyping.propTypes = {
  children: PropTypes.node,
  onTypingDone: PropTypes.func.isRequired,
  no: PropTypes.number.isRequired,
}

SearchEngineTyping.defaultProps = {
  children: '',
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTypingDone: () => dispatch(automateSearchEngineInputs(ownProps.no)),
})

export default connect(null, mapDispatchToProps)(SearchEngineTyping)
