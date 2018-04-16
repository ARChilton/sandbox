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
const IPhoneXToolbar = ({ className }) => (
  <div className={className}>
    <div className={left} />
    <div className={center}>Ask a question</div>
    <div className={right} />
  </div>
)

IPhoneXToolbar.propTypes = {
  className: PropTypes.string.isRequired,
}

const DefaultIPhoneXToolbar = styled(IPhoneXToolbar) `
  height:30px;
  width:100%;
  line-height:30px;
  text-align:center;
  border-bottom: 1px solid #ccc;
`
export default DefaultIPhoneXToolbar
