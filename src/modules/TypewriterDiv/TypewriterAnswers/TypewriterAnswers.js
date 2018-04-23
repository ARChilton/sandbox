import React from 'react'
import styled from 'react-emotion'
import { P as Para, H4 } from '../../../components/Text/Text'
import { phoneSurrondToScreenOnlySwitch } from '../../devices/IPhoneX/IPhoneXComponents/IPhoneXComponents'

const P = styled(Para) `
@media(max-width:${`${phoneSurrondToScreenOnlySwitch}px`}){
  font-size:14px;
}
`

export const A0 = () => (
  <div>
    <P>I thought it would be a bit more interesting to introduce myself styled in the way I see Starmind presents information to its users.</P>
    <P>The phone screen will cycle through some basic questions but also represents a possible method we could use for explaining to your users what Starmind is and how it works.</P>
  </div>
)

export const A1 = () => (
  <div>
    <H4>Profession: Web developer</H4>
    <P>I have been involved in front end development for the past four and a half years.</P>
    <P>I now specialise in Progressive Web Apps (PWAs) to provide websites which function offline just like apps.</P>
    <P>I like to utilise the latest technology to create websites like this one and my most recent project checkpointlive.com.</P>
  </div>
)

export const A2 = () => (
  <div>
    <P>I can provide a customised offering to meet your needs across the full development lifecycle.</P>
    <P>From design through creation to release and ongoing maintenance including Search Engine Optimisation (SEO) and analytics.</P>
    <P>I can be a single point of contact who is familiar with all aspects of your website and your vision for it.</P>
  </div >
)

export const A3 = () => (
  <div>
    <P>I am a certified AGILE product owner.</P>
    <P>In a previous role I led a team to create a front end portal for the Ministry of Defence in the UK.</P>
    <P>Without a dedicated User Interface designer, I also took on this role and received enormous praise for my design.</P>
    <P>Our software we built allows soldiers to perform basic geospatial calculations, preview and order maps for use by their regiment.</P>
  </div>
)

export const A4 = () => (
  <div>
    <P>Before moving into product creation I was a consultant and performed research for the UK Ministry of Defence into knowledge management and how organisations can improve the sharing of knowledge.</P>
    <P>Having completed the research I was stunned at how poorly organisations share knowledge and how much knowledge leaves with an outgoing individual.</P>
    <P>Starmind, from my research looks like a very good solution to a problem space I am familiar with.</P>
  </div>
)

export const A5 = () => (
  <div>
    <P>Please scroll down to read more about the services I provide and my experience.</P>
    <P>A small portfolio of websites I have built or been a part of building are at the bottom of the page.</P>
    <P>On future visits to skip waiting and expose the bottom of the site, click the {"'skip demo'"} button in the toolbar of this phone.</P>
  </div>
)
