import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BackgroundImg as BGI } from '../../../../components/Images/Images'
import { changePortfolioImage } from '../RestOfSiteState'

const PortfolioImg = ({
  id, src, className, onClick, bgColor, bgSize,
}) => (
  // <div className={className}>
  <BGI className={className} src={src} id={id} onClick={onClick} bgColor={bgColor} bgSize={bgSize} />
  // </div>
)

PortfolioImg.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  bgSize: PropTypes.string,
}

PortfolioImg.defaultProps = {
  id: 999,
  className: '',
  onClick: null,
  bgColor: 'transparent',
  bgSize: 'contain',
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changePortfolioImage(ownProps.id)),
})

export default connect(null, mapDispatchToProps)(PortfolioImg)
