import React from 'react'
import PhoneDisplay from '../../../modules/PhoneDisplay/PhoneDisplay'
import Hr from '../../../components/Hr/Hr'
import ProjectBox from './ProjectBox/ProjectBox'
import A from '../../../components/A/A'
import { H2, P } from '../../../components/Text/Text'

// import PropTypes from 'prop-types'

const Project = () => (
  <div>
    <div className="row">
      <H2 className="col-xs-12 col-lg-push-1 col-lg-11">Checkpoint Live - <A href="https://checkpointlive.com">https://checkpointlive.com</A></H2>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-push-1">
        <ProjectBox bgColor="darkBlue" color="#fff" title="Brief">
          <P>
            Utilise technology to make running and organising incident hike events easier for the organisers and safer for the participants.
          </P>
          <P>
            Specifically the collection and collation of reports coming in from the leadership team of when and where they have seen a team of young people.
          </P>
        </ProjectBox>
        <ProjectBox bgColor="darkOrange" color="#fff" title="Challanges">
          <P>The predominant challange for this project was the potential for intermittent internet connection.</P>
        </ProjectBox>
        <ProjectBox bgColor="green" color="#fff" title="Successes">
          <P>The first time checkpoint live was used, before it was even called checkpoint live was a trial for Tonbridge District {"Scout's"} Operation Founder incident hike.</P>
        </ProjectBox>
      </div>
      <div className="col-sm-5 col-sm-push-1 col-lg-4 col-lg-push-2">
        <PhoneDisplay src="https://checkpointlive.com" IFrameTitle="CheckpointLive.com" />
      </div>
    </div>
    <div className="row">
      <Hr className="col-xs-12" />
    </div>

  </div >
)

Project.propTypes = {

}

export default Project
