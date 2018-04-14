import styled from 'react-emotion'

const ColoredDiv = styled('div') `
width:100%;
height:fit-content;
padding:4px 16px;
border-radius:3px;
color: ${props => (props.color ? props.color : '#000')};
background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
`
export default ColoredDiv
