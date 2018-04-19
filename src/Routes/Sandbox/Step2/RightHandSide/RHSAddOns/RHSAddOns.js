import React from 'react'
import { H2, Li, H3, A } from '../../../../../components/Text/Text'


export const AddOn0 = () => (
  <div className="row">
    <div className="col-xs-12">
      <H3 textAlign="center">This is me above, and I have a prepared a small demonstration on the phone.</H3>
    </div>
  </div>
)

export const AddOn1 = () => (
  <div className="row">
    <div className="col-xs-12">

      <div className="col-sm-7" >
        <H2>Experience</H2>
        <ul>
          <Li>Creator and Founder of Checkpoint Live</Li>
          <Li>Web Developer for Tonbridge District Scouts</Li>
          <Li>Front end web developer @ Flix Premiere Ltd.</Li>
          <Li>Product Owner @ Envitia Ltd.</Li>
          <Li>Geospatial Intelligence Consultant @ Envitia Ltd.</Li>
          <Li>First Class (Hons) Human and Physical Geography Degree from the University of Reading</Li>
        </ul>

      </div>
      <div className="col-sm-4 col-sm-offset-1">
        <H2>Tools of choice</H2>
        <ul>
          <Li>React</Li>
          <Li>Redux</Li>
          <Li>NodeJS</Li>
          <Li>PouchDB</Li>
          <Li>CouchDB</Li>
          <Li>Balsamiq mockup tool</Li>
        </ul>
      </div>
    </div>
  </div>

)


export const AddOn2 = () => (
  <div className="row">
    <div className="col-xs-12">

      <div className="col-sm-7" >
        <H2>Products</H2>
        <ul>
          <Li><A target="_blank" href="https://checkpointlive.com">Checkpoint Live</A></Li>
          <Li><A target="_blank" href="https://www.envitia.com/envitia-geoint-suite/">Envitia Horizon</A> front end of the Envitia Geoint Suite</Li>
          <Li><A target="_blank" href="https://www.envitia.com/envitia-receives-contract-from-hp-to-deliver-defence-geospatial-services-dgs-contract-to-the-uk-ministry-of-defence/">Defence Geospatial Services</A></Li>
          <Li>Parcelfly.com (though the owner is waiting for the product to release the new website)</Li>
          <Li>Worked on <A target="_blank" href="https://flixpremiere.com">flixpremiere.com</A></Li>
          <Li>Maintain the <A target="_blank" href="https://tonbridge-scouts.org.uk/">Tonbridge District Scouts Website</A></Li>
        </ul>

      </div>
      <div className="col-sm-4 col-sm-offset-1">
        <H2>Skills</H2>
        <ul>
          <Li>Webapp development</Li>
          <Li>Website development</Li>
          <Li>Design mock-ups</Li>
          <Li>Release management</Li>
          <Li>Team management</Li>
        </ul>
      </div>
    </div>
  </div>
)

