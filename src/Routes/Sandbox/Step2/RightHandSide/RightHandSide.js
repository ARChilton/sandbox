import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRHSState } from '../../../../redux/reducers'
import managementImg from './management.png'
import { H2 } from '../../../../components/Text/Text'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'


const RightHandSide = ({ rhs }) => (
  <div>


    {rhs > 0 ? (
      <ColoredDiv>
        <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Management</H2>
        <img
          src={managementImg}
          alt="Sticky notes showing features of the demonstration in releases"
          title="Sticky notes showing features of the demonstration in releases"
          style={{ width: '100%' }}
        />
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
