import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const star = css`

  fill: #ffd055;

`

const Star = ({ className }) => {
  return (
    <div className={className}>
      <svg height="25" width="23" data-rating="1">
        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" className={star} />
      </svg>
    </div>
  )
}

Star.propTypes = {
  className: PropTypes.string.isRequired,
}

const GoldStar = styled(Star) `
cursor: pointer;
float:left;
`
export default GoldStar
