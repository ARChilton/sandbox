import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getQuestionsSeenState } from '../../../../redux/reducers'
import { H2 } from '../../../../components/Text/Text'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import images, { BackgroundImg } from '../../../../components/Images/Images'
import { FadeInContainer } from '../../../../components/Animation/Animation'


const RightHandSide = ({ questionsSeen }) => (questionsSeen > 3 ? (
  <FadeInContainer>
    <ColoredDiv>
      <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Release</H2>
      <BackgroundImg src={images.management} style={{ width: '100%', height: '550px' }} />
    </ColoredDiv>
  </FadeInContainer>
) : null)


RightHandSide.propTypes = {
  questionsSeen: PropTypes.number.isRequired,
}


const mapStateToProps = state => ({
  questionsSeen: getQuestionsSeenState(state),
})

export default connect(mapStateToProps)(RightHandSide)
// export default RightHandSide
