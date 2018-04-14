import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { H3 } from '../../../../components/Text/Text'
import ColoredDiv from '../../../../components/ColoredDiv/ColoredDiv'

const projectChildren = css `
padding:16px;
font-size:17px;
`

const ProjectBox = ({
  title, children, bgColor, color, className,
}) => (
  <div className={className}>
    <ColoredDiv bgColor={bgColor} color={color}>
      <H3>{title}</H3>
    </ColoredDiv>
    <div className={projectChildren}>
      {children}
    </div>
  </div>
)

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

ProjectBox.defaultProps = {
  children: null,
  bgColor: 'transparent',
  color: '#000',
  className: '',
}

const DefaultProjectBox = styled(ProjectBox) `
    margin-bottom: 20px;
    `

export default DefaultProjectBox
