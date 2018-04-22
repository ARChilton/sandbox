import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { P } from '../../components/Text/Text'
import ChipImg from './ChipImg/ChipImg'


const ChipContainer = styled('div') `
width:50%;
display: flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content: space-around;
font-weight:bold;
min-width:172px;
`

const Chip = ({ className, src, children }) => (
  <div className={className}>
    <ChipContainer>
      <ChipImg src={src} />
      <P>{children}</P>
    </ChipContainer>
  </div>
)

Chip.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

const DefaultChip = styled(Chip) `
float:left,
clear:both;
`

export default DefaultChip
