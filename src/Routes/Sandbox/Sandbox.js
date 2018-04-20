import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import Helmet from 'react-helmet'

import Section from '../../components/Section/Section'
import { H1 } from '../../components/Text/Text'
import ColoredDiv from '../../components/ColoredDiv/ColoredDiv'

import Step2 from './Step2/Step2'
import RestOfSite from './RestOfSite/RestOfSite'
import { getShowRestOfSiteState } from '../../redux/reducers'


const FirstSection = styled(Section) `
padding:0px;
border-bottom:6px solid ${props => props.theme.color.primary};
@media(max-width:768px){
  padding-top:2vh;
  padding-bottom:2vh;
}
`

const HighlightLetters = styled('span') `
color:${props => props.theme.color.secondary};
font-size: 2em;
`

const TopBanner = styled(ColoredDiv) `
border-bottom: 6px solid ${props => props.theme.color.secondary};
border-radius:0px;
background-color:${props => props.theme.color.primary};
color:#fff;
/* margin-bottom:30px; */
`

const Sandbox = ({ showRestOfSite }) => (
  <div>
    <Helmet
      title="Starmind"
    />
    <div className="row">
      <TopBanner className="col-xs-12">
        <H1 textAlign="center"><HighlightLetters>A</HighlightLetters>dam <HighlightLetters>C</HighlightLetters>hilton BSc</H1>
      </TopBanner>
    </div>
    <div className="row">
      <FirstSection bgColor="rgba(0,0,0,0.01)" className="col-xs-12">
        <Step2 />
      </FirstSection>
    </div>
    <div className="row">
      {showRestOfSite
        ? (
          <RestOfSite className="col-xs-12" />
        ) : null}
    </div>

  </div >
)


Sandbox.propTypes = {
  showRestOfSite: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  showRestOfSite: getShowRestOfSiteState(state),
})


export default connect(mapStateToProps)(Sandbox)
