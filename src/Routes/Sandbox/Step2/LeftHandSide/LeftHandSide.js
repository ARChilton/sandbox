import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRHSState } from '../../../../redux/reducers'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import { H2 } from '../../../../components/Text/Text'
import designImg from './starmind-demo-mockup.png'


const LeftHandSide = ({ lhs }) => (
  <div>
    {
      lhs > 0
        ? (
          <ColoredDiv>
            <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Design</H2>
            <img
              src={designImg}
              alt="A sketchy wireframe of the demonstration taking place where the questions and answers show up"
              title="A sketchy wireframe of the demonstration taking place where the questions and answers show up"
              style={{ width: '100%' }}
            />
          </ColoredDiv>
        ) : null
    }
  </div>
)

LeftHandSide.propTypes = {
  lhs: PropTypes.number.isRequired,
}
const mapStateToProps = state => ({
  lhs: getRHSState(state),
})


export default connect(mapStateToProps)(LeftHandSide)
