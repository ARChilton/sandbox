import styled from 'react-emotion'

export const H1 = styled('h1') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size:3em;
@media(max-width:768px){
  font-size:2.5em;
  margin-bottom:20px;
}
`
export const H2 = styled('h2') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size:2em;
font-weight:bold;
@media(max-width:768px){
  font-size:1.6em;
}
`

export const H3 = styled('h3') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size: 1.5em;
margin:4px 0px;
@media(max-width:768px){
  font-size:1.3em;
}
`

export const P = styled('p') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size: 16px;
`
export const Li = styled('li') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size:16px;
`
