import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../img/largeLogo.svg'

const Logo = ({ alt, className }) => (
  <img src={logo} alt={alt} className={className} />
)

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
}
export default Logo
