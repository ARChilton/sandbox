import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import GoldStar from '../../components/Star/Star'


const StarRating = ({ stars, className }) => (
  <div className={className}>{
    [...Array(stars)].map((x, i) => (
      <GoldStar key={`star${Math.random() + i}`} />
    ))}
  </div>
)


StarRating.propTypes = {
  stars: PropTypes.number,
  className: PropTypes.string.isRequired,
}

StarRating.defaultProps = {
  stars: 5,
}

const DefaultStarRating = styled(StarRating) `
float: left;
clear:both;
width:100%;
margin-bottom:8px;
`

export default DefaultStarRating
