import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import Typist from 'react-typist'
import images, { BackgroundImg } from '../../../../components/Images/Images'
import { automateSearchEngineInputs, incrementSearchEngineInput } from '../RestOfSiteState'
import { increaseQuestionNumber } from '../../../../modules/TypewriterDiv/typewriterState'
import { getSearchEngineInputState } from '../../../../redux/reducers'
import SearchEngineTyping from './SearchEngineTyping/SearchEngineTyping';


const Container = styled('div') `
height:50vh;
`

const BGI = styled(BackgroundImg) `
display: flex;
justify-content:center;
align-items:center;
`

const SketchyInput = styled(BackgroundImg) `
width:315px;
height:unset;
text-align:left;
padding-left:8px;
`

const searchEngine = ['Keep knowledge in house', 'What is starmind?', 'What is AI?', 'How to use Starmind', 'Tools for knowledge management']

const SearchEngine = ({
  children, no
}) =>
  (
    <Container>
      <BGI src={images.searchEngine}>
        <SketchyInput src={images.sketchyInputBox}>
          <SearchEngineTyping no={no}>
            {children}
          </SearchEngineTyping>
        </SketchyInput>
      </BGI>
    </Container>
  )

SearchEngine.propTypes = {
  children: PropTypes.node,
  no: PropTypes.number.isRequired,
}

SearchEngine.defaultProps = {
  children: '',
}

export default SearchEngine
