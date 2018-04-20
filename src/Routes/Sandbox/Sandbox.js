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
border-bottom:6px solid ${props => props.theme.color.secondary};
@media(max-width:768px){
  padding-top:2vh;
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
`

const Sandbox = ({ showRestOfSite, className }) => (
  <div className={className}>
    <Helmet
      title="Starmind"
    />
    <div className="row">
      <TopBanner className="col-xs-12">
        <H1 fontFace="titillium web" textAlign="center" style={{ lineHeight: '1.5em' }}><HighlightLetters>A</HighlightLetters>dam <HighlightLetters>C</HighlightLetters>hilton</H1>
      </TopBanner>
    </div>
    <div className="row">
      <FirstSection className="col-xs-12">
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
  className: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  showRestOfSite: getShowRestOfSiteState(state),
})

const DefaultSandbox = styled(Sandbox) `
background-color: ${props => props.theme.color.background || 'rgba(0,0,0,0.01)'};
`

export default connect(mapStateToProps)(DefaultSandbox)
