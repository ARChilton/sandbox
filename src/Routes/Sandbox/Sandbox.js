import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'
import DefaultTypewriterDiv from '../../modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../modules/PhoneQuestionResponse/PhoneQuestionResponse'
import IPhoneX from '../../modules/devices/IPhoneX/IPhoneX'
// import ColoredDiv from '../../components/ColoredDiv/ColoredDiv'
import particleConfig from './particlesjs-config.json'


const DeviceContainer = styled('div') `
@media(min-width:768px){
margin: 5% 15% 0 15%;
}
max-height:600px;
/* overflow-y:hidden; */
`

const BackgroundParticles = styled(Particles) `
position: absolute;
width:100vw;
height:100vh;
top:0px;
bottom:0px;
left:0px;
right:0px;
background-image:url("https://wallpaper.wiki/wp-content/uploads/2017/05/Bright-galaxy-wallpapers-hd-1920x1200-1024x640.jpg");
background-color:#000;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
`


const Sandbox = () => (
  <div>
    <Helmet
      title="Sandbox"
    />

    <BackgroundParticles params={particleConfig} />

    {/* <DefaultPhoneQuestioResponse /> */}
    {/* <ColoredDiv bgColor="green"> */}
    <DeviceContainer>
      <IPhoneX keyboard>
        <DefaultTypewriterDiv />
        <DefaultPhoneQuestioResponse />
      </IPhoneX>
    </DeviceContainer>
    {/* </ColoredDiv> */}

  </div >
)


Sandbox.propTypes = {

}


export default Sandbox
