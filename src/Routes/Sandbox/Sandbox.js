import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css, cx } from 'react-emotion'
import Helmet from 'react-helmet'
import DefaultTypewriterDiv from '../../modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../modules/PhoneQuestionResponse/PhoneQuestionResponse'
import IPhoneX from '../../modules/devices/IPhoneX/IPhoneX'
import Section from '../../components/Section/Section'
import { H1 } from '../../components/Text/Text'
import RightHandSide from './RightHandSide/RightHandSide'
import ColoredDiv from '../../components/ColoredDiv/ColoredDiv'
import { getShowQuestionControlState, getTypewriterQuestionNumber, getTypewriterQuestions } from '../../redux/reducers'
import { increaseQuestionNumber, decreaseQuestionNumber } from '../../modules/TypewriterDiv/typewriterState'

const rhsContainerClass = css`
padding:8px;
@media(min-width:768px){
  padding:90px 8px 16px;
}
`
const DeviceContainer = styled('div') `
/* @media(min-width:768px){
margin: 5% 15% 0 15%;
} */
transform: scale(0.8);
display:flex;
@media(max-width:768px){
  margin:-31px;
}
`
const TitleSection = styled(Section) `
@media(max-width:768px){
  padding-top:0px;
  padding-bottom:2vh;
}
`

// const BackgroundParticles = styled(Particles) `
// position: absolute;
// width:100%;
// height:100%;
// top:0px;
// bottom:0px;
// left:0px;
// right:0px;
// /* background-image:url("https://static1.squarespace.com/static/57ed3edb37c58182f815c65f/57ed3f076a49633d10d11e12/58db9da4b3db2b357519a56d/1490802128845/shutterstock_340384811.jpg?format=3000w"); */
// background-color:rgba(0,0,0,0.01);
// background-repeat:no-repeat;
// background-position:center;
// background-size:cover;
// z-index:-1;
// `
const Button = styled('button') `
border:none;
background-color:transparent;
color:rgba(0,0,0,0.2);
padding:16px;
height:100%;
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

const Sandbox = ({ showControlButtons, onClickLeft, onClickRight, questionNumber, questions }) => (
  <div>
    <Helmet
      title="Starmind"
    />


    {/* <TitleSection>
      <BackgroundParticles params={particleConfig} />
      <Section>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <H1 color="#fff" textAlign="center">Welcome Starmind</H1>
          <H2 color="#fff" textAlign="center">The key purpose of a point of sales website is to let the user know who you are.</H2>
          <H2 color="#fff" textAlign="center">Why you exist and what you can do for them.</H2>
          <H2 color="#fff" textAlign="center">So please allow me to show you a little about me.</H2>
        </div>
      </Section>
    </TitleSection> */}
    <ColoredDiv bgColor="#3F51B5" color="#fff" className="col-xs-12" style={{ 'margin-top': '16px' }}>
      <H1 className="col-xs-12 col-lg-11 col-lg-offset-1">Adam Chilton BSc</H1>

    </ColoredDiv>
    <TitleSection bgColor="rgba(0,0,0,0.01)">

      <div className="col-xs-12 col-md-5 col-lg-4 col-lg-offset-1">
        <DeviceContainer >
          <IPhoneX keyboard toolbarTitle="Ask a question">
            <DefaultTypewriterDiv />
            <div style={{ 'border-bottom': '8px solid #efefef', width: '100%' }} />
            <DefaultPhoneQuestioResponse />
          </IPhoneX>
        </DeviceContainer>
        {showControlButtons ? (
          <div style={{
            position: 'absolute', top: '25%', width: '100%', height: '50vh',
          }}
          >
            {questionNumber > 0 ?
              <Button onClick={onClickLeft} style={{ position: 'absolute', left: '0px' }}><Chevron style={{ transform: 'rotate(225deg)', 'margin-bottom': '-6px' }} /></Button> : null}
            {questionNumber !== questions - 1 ?
              <Button onClick={onClickRight} style={{ position: 'absolute', right: '0px' }}><Chevron style={{ transform: 'rotate(45deg)', 'margin-top': '-6px' }} /></Button> : null}
          </div>
        ) : null}

      </div>

      <div className={cx(rhsContainerClass, 'col-xs-12 col-md-6 col-md-offset-1')} style={{ color: '#000' }}>
        <RightHandSide />

      </div>
    </TitleSection>

  </div >
)


Sandbox.propTypes = {
  showControlButtons: PropTypes.bool.isRequired,
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  showControlButtons: getShowQuestionControlState(state),
  questionNumber: getTypewriterQuestionNumber(state),
  questions: getTypewriterQuestions(state).length,
})

const mapDispatchToProps = dispatch => ({
  onClickLeft: () => dispatch(decreaseQuestionNumber()),
  onClickRight: () => dispatch(increaseQuestionNumber())
})
export default connect(mapStateToProps, mapDispatchToProps)(Sandbox)
