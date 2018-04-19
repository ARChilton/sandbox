import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Section from '../../../components/Section/Section'
import { H2, P } from '../../../components/Text/Text'
import ColoredDiv from '../../../components/ColoredDiv/ColoredDiv'

const FlexContainer = styled('div') `
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:row;
/* @media(max-width:992px){
  flex-direction:column;
} */
`

const RestOfSite = () => (
  <div>

    <FlexContainer className="row">
      <div className="col-md-4">images</div>
      <div className="col-md-8">
        <ColoredDiv bgColor="green" color="#fff">
          <H2>Design</H2>
          <P>Design Text</P>
        </ColoredDiv>
      </div>
    </FlexContainer>
    <hr />
  </div>
)

RestOfSite.propTypes = {

}

export default RestOfSite
