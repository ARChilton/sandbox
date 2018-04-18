import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import ChipImg from '../../../modules/Chip/ChipImg/ChipImg'
import me from '../../../modules/PhoneQuestionResponse/me.jpg'
import { getRHSState } from '../../../redux/reducers'
import { AddOn0, AddOn1, AddOn2 } from './RHSAddOns/RHSAddOns'


const RightHandSide = ({ rhs }) => (
  <div>


    <div className="col-xs-4  col-xs-offset-4 col-sm-2 col-sm-offset-5">
      <ChipImg src={me} dimensions="100%" style={{ margin: 'auto' }} />
    </div>

    <div key="container" className="col-xs-12">
      {rhs > 0 ? (
        <div>
          <AddOn1 key="addon1" />
          <AddOn2 key="addon2" />
        </div>
      )
        : <AddOn0 key="addon0" />}
      {/* {rhs > 2 ? (
          <AddOn2 />
        )
          : null} */}
    </div>

  </div >

)

RightHandSide.propTypes = {
  rhs: PropTypes.number.isRequired,
}


const mapStateToProps = state => ({
  rhs: getRHSState(state),
})

export default connect(mapStateToProps)(RightHandSide)
// export default RightHandSide
