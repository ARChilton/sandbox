import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRHSState } from '../../../../redux/reducers'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import { H2 } from '../../../../components/Text/Text'
import images, { BackgroundImg } from '../../../../components/Images/Images'


const LeftHandSide = ({ lhs }) => (
  <div>
    {
      lhs > 0
        ? (
          <ColoredDiv>
            <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Design</H2>
            <BackgroundImg src={images.starMindDemoMockup} style={{ width: '100%', height: '550px' }} />
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
