import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css, cx } from 'react-emotion'
import DefaultTypewriterDiv from '../../../modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../../modules/PhoneQuestionResponse/PhoneQuestionResponse'
import IPhoneX from '../../../modules/devices/IPhoneX/IPhoneX'
import RightHandSide from './RightHandSide/RightHandSide'
import { getShowQuestionControlState, getTypewriterQuestionNumber, getTypewriterQuestions } from '../../../redux/reducers'
import { increaseQuestionNumber, decreaseQuestionNumber } from '../../../modules/TypewriterDiv/typewriterState'
import LeftHandSide from './LeftHandSide/LeftHandSide'
import { LifecycleTypewriterDiv } from '../../../modules/TypewriterDiv/LifecycleTypewriterDiv'

const additionalInfoContainerClass = css`
padding:8px;
@media(max-width:992px){
  display:none;
  order:2;
}
`
const DeviceContainer = styled('div') `
overflow-y:hidden;
height:90%;
padding-left:4px;
width:435px;
align-self:flex-end;
`
const deviceContainerContainer = css`
height:90vh;
width:535px;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:row;
`

const buttonContainer = css`
height:100%;
width:40px;
`

const Button = styled('button') `
border:none;
background-color:transparent;
color:rgba(0,0,0,0.2);
padding:16px;
height:100%;
width:100%;
:focus{
  border:none;
}
:hover{
  color:rgba(0,0,0,0.5);
}
`

const Chevron = styled('div') `
::before {
  border-style: solid;
  border-width: 3px 3px 0 0;
  font-size:35px;
  content: '';
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  position: relative;
  vertical-align: top;
  width: 0.45em;
  top: 0;
}
`

const Step2 = ({
  showControlButtons, onClickLeft, onClickRight, questionNumber, questions, className,
}) => (
    <div className={className}>

      <div className={cx(additionalInfoContainerClass, 'col-xs-10', 'col-md-3', 'col-lg-4')} style={{ color: '#000' }}>
        <LeftHandSide />
      </div>

      <div className={deviceContainerContainer}>

        <div className={buttonContainer}>
          {showControlButtons && questionNumber > 0 ?
            <Button onClick={onClickLeft}><Chevron style={{ transform: 'rotate(225deg)', marginBottom: '-6px' }} /></Button> : null}
        </div>

        <DeviceContainer >
          <IPhoneX toolbarTitle="Ask a question">
            <DefaultTypewriterDiv />
            {/* <LifecycleTypewriterDiv /> */}
            <div style={{ borderBottom: '8px solid #efefef', width: '100%' }} />
            <DefaultPhoneQuestioResponse />
          </IPhoneX>
        </DeviceContainer>

        <div className={buttonContainer}>
          {showControlButtons && (questionNumber !== (questions - 1)) ?
            <Button onClick={onClickRight}><Chevron style={{ transform: 'rotate(45deg)', 'margin-top': '-6px' }} /></Button> : null}
        </div>

      </div>

      <div className={cx(additionalInfoContainerClass, 'col-xs-10', 'col-md-3', 'col-lg-4')} style={{ color: '#000' }}>
        <RightHandSide />
      </div>
    </div>
  )

Step2.propTypes = {
  showControlButtons: PropTypes.bool.isRequired,
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
}

const DefaultStep2 = styled(Step2) `
display:flex;
justify-content:space-evenly;
align-items:flex-start;
flex-direction:row;
@media(max-width:992px){
  flex-direction:column;
}
`

const mapStateToProps = state => ({
  showControlButtons: getShowQuestionControlState(state),
  questionNumber: getTypewriterQuestionNumber(state),
  questions: getTypewriterQuestions(state).length,
})

const mapDispatchToProps = dispatch => ({
  onClickLeft: () => dispatch(decreaseQuestionNumber()),
  onClickRight: () => dispatch(increaseQuestionNumber()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultStep2)
