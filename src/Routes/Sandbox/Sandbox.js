import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import DefaultTypewriterDiv from '../../modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../modules/PhoneQuestionResponse/PhoneQuestionResponse'
import { changeQuestionNumber } from '../../modules/TypewriterDiv/typewriterState'
import { getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'
import IPhoneX from '../../modules/devices/IPhoneX/IPhoneX'
import ColoredDiv from '../../components/ColoredDiv/ColoredDiv'

const DeviceContainer = styled('div') `
@media(min-width:768px){
margin: 5% 15% 0 15%;
}
max-height:600px;
/* overflow-y:hidden; */


`

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

      <div style={{ backgroundColor: '#fff', height: '100vh', width: '100%' }}>
        <Helmet
          title="Sandbox"
        />
        {/* <DefaultPhoneQuestioResponse /> */}
        <ColoredDiv bgColor="green">
          <DeviceContainer>
            <IPhoneX keyboard>
              <DefaultTypewriterDiv />
              <DefaultPhoneQuestioResponse />
            </IPhoneX>
          </DeviceContainer>
        </ColoredDiv>

      </div >
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
