import { breakpoints, injectGlobal, theme } from '.'
import importFonts from './fonts'

export default () => {
  injectGlobal`
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
      color: ${theme.primaryColour};
      font-size: 1rem;
      background-color: ${theme.primaryBackground};
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
        max-width: 1280px;
      }
    }
  `
}
