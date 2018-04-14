import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { H1 } from '../../components/Text/Text'

import Project from './Project/Project'

const ProjectsPage = ({ className }) => (
  <div className={className}>
    <Helmet
      title="Projects"
    />
    <H1 className="col-xs-12 col-lg-push-1 col-lg-11">My Projects</H1>
    <Project />
  </div>
)

ProjectsPage.propTypes = {
  className: PropTypes.string.isRequired,
}

const DefaultProjectsPage = styled(ProjectsPage) `
padding:16px;
`

export default DefaultProjectsPage
