/* eslint react/no-unused-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'


const TypewriterText = ({ className, children, typewriterText }) => (
  <div className={className}>
    {children}{typewriterText}
  </div>
)

TypewriterText.propTypes = {
  className: PropTypes.string.isRequired,
  typewriterText: PropTypes.string,
  children: PropTypes.node,
  duration: PropTypes.number,
  delay: PropTypes.number,
  blinkDuration: PropTypes.string,
  steps: PropTypes.number,
  blinkColorFrom: PropTypes.string,
  blinkColorTo: PropTypes.string,
  typeWidth: PropTypes.string,
}

TypewriterText.defaultProps = {
  typewriterText: 'Default message',
  duration: 4,
  delay: 1,
  steps: 44,
  blinkDuration: '900ms',
  blinkColorFrom: 'rgba(0,0,0,0.75)',
  blinkColorTo: 'transparent',
  typeWidth: '24em',
  children: null,
}


const DefaultTypewriterText = styled(TypewriterText) `
  font-family:'Anonymous Pro', monospace;
  font-size:1em;
  width:fit-content;
  z-index:2;
  /* padding:4px 8px; */
  border-right:2px solid;
  overflow: hidden;
  white-space: nowrap;
  animation: ${props => `typewriter ${props.duration}s steps(${props.steps}) ${props.delay}s normal both, blinkTextCursor ${props.blinkDuration} steps(${props.steps}) infinite normal`};

  @keyframes typewriter{
  from{width: 0;}
  to{width: ${props => props.typeWidth};}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: ${props => props.blinkColorFrom};}
    to{border-right-color: ${props => props.blinkColorTo};}
  }
`
DefaultTypewriterText.defaultProps = TypewriterText.defaultProps

export default DefaultTypewriterText
