import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TypewriterDiv from './TypewriterDiv'
import { toggleShowQuestions, firstLoad } from './typewriterState'

export class LifecycleTypewriterDiv extends Component {

  componentDidMount() {
    console.log('did mount')
    return setTimeout(() => this.props.didMount, 1000)
  }

  render() {
    return (
      <TypewriterDiv />
    )
  }
}

LifecycleTypewriterDiv.propTypes = {
  didMount: PropTypes.func.isRequired,

}


const mapDispatchToProps = dispatch => ({
  didMount: dispatch(toggleShowQuestions(true)),
})

export default connect({}, mapDispatchToProps)(LifecycleTypewriterDiv)
