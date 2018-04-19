import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRHSState } from '../../../../redux/reducers'
import { H2 } from '../../../../components/Text/Text'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import images, { BackgroundImg } from '../../../../components/Images/Images'


const RightHandSide = ({ rhs }) => (
  <div>


    {rhs > 0 ? (
      <ColoredDiv>
        <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Release</H2>
        <BackgroundImg src={images.management} style={{ width: '100%', height: '550px' }} />
      </ColoredDiv>
    ) : null
    }

  </div>


)

RightHandSide.propTypes = {
  rhs: PropTypes.number.isRequired,
}


const mapStateToProps = state => ({
  rhs: getRHSState(state),
})

export default connect(mapStateToProps)(RightHandSide)
// export default RightHandSide
