import { transparentize } from 'polished'

import { theme } from './'

export const defaultButtonStyle = `
color: ${theme.primaryColour};
margin: 0;
padding: 0;
background: transparent;
border: none;
font-family: 'EB Garamond', serif;
font-size: 1rem;
cursor: pointer;
text-decoration: underline solid ${transparentize(0.25, theme.primaryColourDecorate)};
user-select: none;
-webkit-tap-highlight-color: transparent;

:focus {
  outline: none;
}
`

export default {}
