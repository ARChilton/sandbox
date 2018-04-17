import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'
import ChordDiagram from 'react-chord-diagram'
import MindMap from 'react-mindmap'
import DefaultTypewriterDiv from '../../modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../modules/PhoneQuestionResponse/PhoneQuestionResponse'
import IPhoneX from '../../modules/devices/IPhoneX/IPhoneX'
// import ColoredDiv from '../../components/ColoredDiv/ColoredDiv'
import particleConfig from './particlesjs-config.json'
import Section from '../../components/Section/Section'
import { H1, H2, H3, P } from '../../components/Text/Text'
import { nodes, connections } from './MindMapConfig'
import RightHandSide from './RightHandSide/RightHandSide'


const DeviceContainer = styled('div') `
/* @media(min-width:768px){
margin: 5% 15% 0 15%;
} */
transform: scale(0.8);
display:flex;
`
const TitleSection = styled(Section) `
height:75vh;
`

const BackgroundParticles = styled(Particles) `
position: absolute;
width:100%;
height:100%;
top:0px;
bottom:0px;
left:0px;
right:0px;
/* background-image:url("https://static1.squarespace.com/static/57ed3edb37c58182f815c65f/57ed3f076a49633d10d11e12/58db9da4b3db2b357519a56d/1490802128845/shutterstock_340384811.jpg?format=3000w"); */
background-color:#000;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
z-index:-1;
`
const matrix = [
  [0, 2, 5, 2],
  [3, 0, 7, 8],
  [5, 2, 0, 4],
  [4, 4, 4, 0],
]


const Sandbox = () => (
  <div>
    <Helmet
      title="Sandbox"
    />


    <TitleSection>
      <BackgroundParticles params={particleConfig} />
      <Section>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <H1 color="#fff" textAlign="center">Welcome Starmind</H1>
          <H2 color="#fff" textAlign="center">The key purpose of a point of sales website is to let the user know who you are.</H2>
          <H2 color="#fff" textAlign="center">Why you exist and what you can do for them.</H2>
          <H2 color="#fff" textAlign="center">So please allow me to show you a little about me.</H2>
        </div>
      </Section>
    </TitleSection>
    <Section bgColor="darkBlue">
      <div className="col-xs-12 col-sm-4 col-sm-offset-1">
        <DeviceContainer >
          <IPhoneX keyboard toolbarTitle="Ask a question">
            <DefaultTypewriterDiv />
            <div style={{ 'border-bottom': '8px solid #efefef', width: '100%' }} />
            <DefaultPhoneQuestioResponse />
          </IPhoneX>
        </DeviceContainer>
      </div>
      <div className="col-xs-12 col-sm-7" style={{ color: '#fff' }}>
        <RightHandSide />
      </div>
    </Section>

    {/* <ChordDiagram
      className="col-xs-8 col-xs-push-4"
      matrix={matrix}
      componentId={1}
      groupLabels={['Starmind', 'KM', 'Brown', 'Orange']}
      groupColors={['rgba(255,255,255,0.5)', '#f91000', '#957244', '#F26223']}
    />

    <MindMap nodes={nodes} connections={connections} /> */}
  </div >
)


Sandbox.propTypes = {

}


export default Sandbox
