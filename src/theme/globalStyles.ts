import { injectGlobal } from '.'
import device from './devices'
import importFonts from './fonts'

export default () => {
  injectGlobal`
    ${importFonts()}

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Inter UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: 'Rubik', sans-serif;
    }

    #root {
      width: 100vw;
    }

    /*
    @media ${device.tabletPortrait} {
      body {
        align-items: center;
      }

      #root {
        width: 768px;
      }
    }

    @media ${device.tabletLandscape} {
      #root {
        width: 960px;
      }
    }

    @media ${device.desktopSmall} {
      #root {
        width: 1024px;
      }
    }

    @media ${device.desktopMedium} {
      #root {
        width: 1280px;
      }
    }

    @media ${device.desktopLarge} {
      #root {
        width: 1440px;
      }
    }

    @media ${device.desktopExtraLarge} {
      #root {
        width: 1600px;
      }
    }
    */
  `
}
