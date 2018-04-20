import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/devices.css'

const MacBook = ({ children }) => (
  <div className="marvel-device macbook">
    <div className="top-bar" />
    <div className="camera" />
    <div className="screen">
      {children}
    </div>
    <div className="bottom-bar" />
  </div>
)


MacBook.propTypes = {
  children: PropTypes.node,
}

MacBook.defaultProps = {
  children: null,
}

export default MacBook
