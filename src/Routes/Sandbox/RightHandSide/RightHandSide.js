import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { H1, H2, H3, P, Li } from '../../../components/Text/Text'
import ChipImg from '../../../modules/Chip/ChipImg/ChipImg'
import me from '../../../modules/PhoneQuestionResponse/me.jpg'
import { getTypewriterQuestionNumber } from '../../../redux/reducers'

const RightHandSide = ({ rhs }) => (
  <div>
    <H1>Adam Chilton BSc</H1>
    <div className="col-xs-2">
      <ChipImg src={me} dimensions="100%" />
    </div>
    <div className="col-xs-12">
      {rhs > 1 ? (
        <div className="row">
          <div className="col-xs-12">
            <div key="b0">
              <div className="col-sm-6" >
                <H2>Experience</H2>
                <ul>
                  <Li>Creator and Founder of Checkpoint Live</Li>
                  <Li>Web Developer for Tonbridge District Scouts</Li>
                  <Li>Front end web developer @ Flix Premiere Ltd.</Li>
                  <Li>Product Owner @ Envitia Ltd.</Li>
                  <Li>Geospatial Intelligence Consultant @ Envitia Ltd.</Li>
                </ul>

              </div>
              <div className="col-sm-6">
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
          </div>
        </div>
      )
        : null}
    </div>
  </div>
)

RightHandSide.propTypes = {
  rhs: PropTypes.arrayOf(PropTypes.func),
}

RightHandSide.defaultProps = {
  rhs: [1],
}

const mapStateToProps = state => ({
  rhs: getTypewriterQuestionNumber(state)
})

export default connect(mapStateToProps)(RightHandSide)
// export default RightHandSide
