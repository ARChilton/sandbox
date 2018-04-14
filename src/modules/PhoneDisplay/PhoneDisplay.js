import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import phoneSurround from '../../img/blank-phone.png'

const PhoneSurroundDiv = styled('div') `
max-width:328px;
width:100%;
height:600px;
z-index:1;
background-image:url(${phoneSurround});
background-size:100% 100%;
background-repeat:no-repeat;
margin:auto;
`

const IFrameContainer = styled('iframe') `
  width: 83.5%;
  height: 74%;
  margin-left: 8%;
  margin-top: 26%;
  z-index:-1;
  border:none;
`

const PhoneDisplay = ({ className, src, iFrameTitle }) => (
  <div className={className}>
    <PhoneSurroundDiv>
      <IFrameContainer src={src} title={iFrameTitle} />
    </PhoneSurroundDiv>
  </div>
)

PhoneDisplay.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  iFrameTitle: PropTypes.string.isRequired,
}

const DefaultPhoneDisplay = styled(PhoneDisplay) `
width:100%;
margin:auto;
display: flex;
flex-direction:column;
justify-content:center;

`

export default DefaultPhoneDisplay
