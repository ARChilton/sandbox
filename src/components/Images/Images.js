import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import starMindDemoMockup from './starmind-demo-mockup.png'
import management from './management.png'
import websiteDesign from './website-design.png'
import flix from './flixpremiere-home.png'
import websiteDesign2 from './website-design-iteration-2.png'

export const BackgroundImg = styled('div') `
width:100%;
height:100%;
background-image: url(${props => props.src});
background-repeat: no-repeat;
background-position: center;
background-size:${props => props.bgSize || 'contain'};
background-color:${props => props.bgColor || 'transparent'};
`

export const StarMindDemoMockupImg = ({ className, style }) => (
  <img
    src={starMindDemoMockup}
    alt="A sketchy wireframe of the demonstration taking place where the questions and answers show up"
    title="A sketchy wireframe of the demonstration taking place where the questions and answers show up"
    className={className}
    style={style}
  />
)
StarMindDemoMockupImg.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}
StarMindDemoMockupImg.defaultProps = {
  className: null,
  style: null,
}

export const ManagementImg = ({ className, style }) => (
  <img
    src={management}
    alt="Sticky notes showing features of the demonstration in releases"
    title="Sticky notes showing features of the demonstration in releases"
    className={className}
    style={style}
  />
)

ManagementImg.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}
ManagementImg.defaultProps = {
  className: null,
  style: null,
}

export const WebsiteDesign = ({ className, style }) => (
  <img
    src={websiteDesign}
    alt="Balsamiq wireframe for this demonstration website"
    title="Balsamiq wireframe for this demonstration website"
    className={className}
    style={style}
  />
)

WebsiteDesign.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}
WebsiteDesign.defaultProps = {
  className: null,
  style: null,
}

const images = {
  starMindDemoMockup,
  management,
  websiteDesign,
  flix,
  websiteDesign2,
}

export default images
