import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getQuestionsSeenState, getdesignCreateReleaseShowAfterState } from '../../../../redux/reducers'
import { H2 } from '../../../../components/Text/Text'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import images, { BackgroundImg } from '../../../../components/Images/Images'
import { FadeInContainer } from '../../../../components/Animation/Animation'


const RightHandSide = ({ questionsSeen, designCreateReleaseShowAfter }) => (questionsSeen > designCreateReleaseShowAfter ? (
  <FadeInContainer>
    <a href="#releaseSection">
      <ColoredDiv>
        <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Release</H2>
        <BackgroundImg src={images.management} style={{ width: '100%', height: '550px' }} />
      </ColoredDiv>
    </a>
  </FadeInContainer>
) : null)


RightHandSide.propTypes = {
  questionsSeen: PropTypes.number.isRequired,
  designCreateReleaseShowAfter: PropTypes.number.isRequired,
}


const mapStateToProps = state => ({
  questionsSeen: getQuestionsSeenState(state),
  designCreateReleaseShowAfter: getdesignCreateReleaseShowAfterState(state),
})

export default connect(mapStateToProps)(RightHandSide)
// export default RightHandSide
