import { breakpoints, createGlobalStyle, theme } from '.'
import importFonts from './fonts'

const GlobalStyle = createGlobalStyle`
  ${importFonts()}

  html {
    box-sizing: border-box;
    font-size: 18px;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    color: ${theme.primaryColour};
    background-color: ${theme.primaryBackground};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'EB Garamond', serif;
    font-variant-ligatures: contextual;
    font-size: 1rem;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    font-size: 1rem;
    width: 100%;
    height: 100%;
  }

  @media ${breakpoints.desktop} {
    html {
      font-size: 20px;
      max-width: 1600px;
      margin: 0 auto;
    }
  }
`

export default GlobalStyle

/*
  -- background gradient animation --

  import { darken, lighten } from 'polished'

`
  background: linear-gradient(45deg, ${theme.primaryBackground}, ${lighten(0.25, theme.primaryBackground)}, ${darken(0.5, theme.primaryBackground)});
  background-size: 2000vw 2000vh;
  animation: AnimationName 10s linear infinite;

  @keyframes AnimationName {
      0%{background-position:9% 0%}
      50%{background-position:92% 100%}
      100%{background-position:9% 0%}
  }
`

*/
