import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'


const left = css `
  min-width:25%;
  /* float:left; */
`
const center = css `
  min-width:50%;
  /* float:left; */
`
const right = css `
  min-width:25%;
  /* float:right; */
`
const IPhoneXToolbar = ({
  className, leftChildren, centerChildren, rightChildren,
}) => (
  <div className={className}>
    <div className={left}>{leftChildren}</div>
    <div className={center}>{centerChildren}</div>
    <div className={right}>{rightChildren}</div>
  </div>
)

IPhoneXToolbar.propTypes = {
  className: PropTypes.string.isRequired,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
  centerChildren: PropTypes.node,
}

IPhoneXToolbar.defaultProps = {
  leftChildren: null,
  rightChildren: null,
  centerChildren: null,
}

const DefaultIPhoneXToolbar = styled(IPhoneXToolbar) `
  height:30px;
  width:100%;
  line-height:30px;
  text-align:center;
  border-bottom: 1px solid #ccc;
`
export default DefaultIPhoneXToolbar
