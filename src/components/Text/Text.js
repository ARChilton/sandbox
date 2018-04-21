import styled from 'react-emotion'

export const H1 = styled('h1') `
font-family:${props => props.fontFamily || props.theme.font.fontFamily || 'roboto'};
font-size:3em;
font-weight:${props => props.fontWeight || '400'};
color:${props => props.color || props.theme.color.h1 || 'inherit'};
text-align:${props => props.textAlign || 'inherit'};
@media(max-width:768px){
  font-size:2.5em;
  margin-bottom:20px;
}

`
export const H2 = styled('h2') `
font-family:${props => props.fontFamily || props.theme.font.fontFamily || 'roboto'};
font-size:2em;
font-weight:${props => props.fontWeight || '400'};
color:${props => props.color || props.theme.color.h2 || 'inherit'};
text-align:${props => props.textAlign || 'inherit'};
@media(max-width:768px){
  font-size:1.6em;
}
`

export const H3 = styled('h3') `
font-family:${props => props.fontFamily || props.theme.font.fontFamily || 'roboto'};
font-size: 1.5em;
margin:4px 0px;
font-weight:${props => props.fontWeight || '400'};
color:${props => props.color || props.theme.color.h3 || 'inherit'};
text-align:${props => props.textAlign || 'inherit'};
@media(max-width:768px){
  font-size:1.3em;
}
`

export const H4 = styled('h4') `
font-family:${props => props.fontFamily || props.theme.font.fontFamily || 'roboto'};
font-size: 1.2em;
margin:4px 0px;
font-weight:${props => props.fontWeight || '400'};
color:${props => props.color || props.theme.color.h4 || 'inherit'};
text-align:${props => props.textAlign || 'inherit'};
@media(max-width:768px){
  font-size:1.1em;
}
`

export const P = styled('p') `
font-family:${props => props.fontFamily || props.theme.font.fontFamily || 'roboto'};
font-size: 16px;
color:${props => props.color || 'inherit'};
text-align:${props => props.textAlign || 'inherit'};
`
export const Li = styled('li') `
font-family:${props => props.theme.font.fontFamily || 'roboto'};
font-size:16px;
`

export const A = styled('a') `
color:${props => props.theme.color.primary};
:hover{
  color:${props => props.theme.color.secondary};
}
`
