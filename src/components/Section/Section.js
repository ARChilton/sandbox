import styled from 'react-emotion'
import PropTypes from 'prop-types'


const Section = styled('section') `
  background: ${
  props => props.bgColor || (props.bgPrimaryId && `url(${props.bgImage})`) || 'transparent'
};
  background-size: cover;
  color: ${props => (props.dark ? '#fff' : 'inherit')};
  padding-top: ${props => props.padding};
  padding-bottom: ${props => props.padding};
  position:relative;
  width:100%;
  float:left;
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  padding: PropTypes.string,
}

Section.defaultProps = {
  padding: '60px',
  bgColor: null,
  bgImage: null,
}

export default Section
