import React from 'react'
import { P, A, H2, H4, Li } from '../../../components/Text/Text'

export const A0 = () => (
  <div>
    <P>I thought it would be a bit more interesting to introduce myself styled in the way I see Starmind presents information to its users.</P>
    <P>The phone screen will cycle through some basic questions but also represents a possible method we could use for explaining to your users what StarMind is as well as how it works.</P>
  </div>
)

export const A1 = () => (
  <div>
    <H4>Profession: Web developer</H4>
    <P>I have been involved in front end development for the past 4 and a half years.</P>
    <P>I now specialise in Progressive Web Apps (PWAs) to provide websites which function offline just like apps.</P>
    <P>I like to utilise the latest technology to create websites like this one and my most recent project <A href="https://checkpointlive.com">checkpointlive.com</A>.</P>
  </div>
)

export const A2 = () => (
  <div>
    <P>I am a certified AGILE product owner.</P>
    <P>In a previous role I designed and led a team to create a front end portal for the Ministry of Defence in the UK.</P>
    <P>This allowed regiments to perform basic geospatial calculations, preview and order their maps.</P>
  </div>
)

export const A3 = () => (
  <img style={{ width: '100%' }} src="https://metrouk2.files.wordpress.com/2017/07/187144066.jpg?w=748&h=498&crop=1" alt="cute kittens" />
)

export const B0 = () => (
  <div key={'b0'}>
    <div className="col-sm-6" >
      <H2>Experience</H2>
      <P>Creator and Founder of Checkpoint Live</P>
      <P>Web Developer for Tonbridge District Scouts</P>
      <P>Front end web developer @ Flix Premiere Ltd.</P>
      <P>Product Owner @ Envitia Ltd.</P>
      <P>Geospatial Intelligence Consultant @ Envitia Ltd.</P>
    </div>
    <div className="col-xs-12">
      <H2>Tools of choice</H2>
      <ul>
        <Li>React</Li>
        <Li>Redux</Li>
        <Li>NodeJS</Li>
        <Li>PouchDB</Li>
        <Li>CouchDB</Li>
      </ul>
    </div>
  </div>
)