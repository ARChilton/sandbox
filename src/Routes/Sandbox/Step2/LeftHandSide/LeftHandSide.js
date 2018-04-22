import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getQuestionsSeenState, getdesignCreateReleaseShowAfterState } from '../../../../redux/reducers'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'
import { H2 } from '../../../../components/Text/Text'
import images, { BackgroundImg } from '../../../../components/Images/Images'
import { FadeInContainer } from '../../../../components/Animation/Animation'


const LeftHandSide = ({ questionsSeen, designCreateReleaseShowAfter }) => (questionsSeen > designCreateReleaseShowAfter
  ? (
    <FadeInContainer>
      <a href="#designSection">
        <ColoredDiv>
          <H2 textAlign="center" fontFamily="Kalam" fontWeight="bold">Design</H2>
          <BackgroundImg src={images.starMindDemoMockup} style={{ width: '100%', height: '550px' }} />
        </ColoredDiv>
      </a>
    </FadeInContainer>
  ) : null)


LeftHandSide.propTypes = {
  questionsSeen: PropTypes.number.isRequired,
  designCreateReleaseShowAfter: PropTypes.number.isRequired,
}
const mapStateToProps = state => ({
  questionsSeen: getQuestionsSeenState(state),
  designCreateReleaseShowAfter: getdesignCreateReleaseShowAfterState(state),
})


export default connect(mapStateToProps)(LeftHandSide)
