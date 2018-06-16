import { theme, injectGlobal } from '.'
import importFonts from './fonts'

export default () => {
  injectGlobal`
    ${importFonts()}

    html {
      box-sizing: border-box;
      font-size: 18px;
      width: 100vw;
      height: 90vh;
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
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
    }

    #root {
      display: flex;
      flex: 1 1 auto;
      font-size: 1rem;
    }

    @media all and (orientation: landscape) {
      html {
        font-size: 20px;
      }
    }
  `
}
