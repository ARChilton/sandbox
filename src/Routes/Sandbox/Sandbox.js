import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DefaultTypewriterDiv from '../../modules/TypewriterDiv/TypewriterDiv'
import DefaultQuestionResponse from '../../modules/QuestionResponse/QuestionResponse'
import { changeQuestionNumber } from '../../modules/TypewriterDiv/typewriterState'
import { getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'
// import PropTypes from 'prop-types'
// import Canvas from '../../components/Canvas/Canvas'


class Sandbox extends Component {
  componentDidMount() {
    console.log(this.props)

    // Need way of controlling animations to run one after the other
    // return this.props.questions.forEach(()=>(
    //   this.runAnimations()
    // ))
  }

  runAnimations() {
    this.props.dispatch(changeQuestionNumber(this.props.questionNumber))
  }

  render() {
    return (
      <div style={{ backgroundColor: '#000', height: '100vh', width: '100%' }}>

        {/* <Canvas w="100%" h="80%" /> */}
        <DefaultTypewriterDiv />
        <DefaultQuestionResponse />

      </div>
    )
  }
}

Sandbox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  questionNumber: getTypewriterQuestionNumber(state),
  questions: getTypewriterQuestions(state),
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})
export default connect(mapStateToProps, mapDispatchToProps)(Sandbox)
