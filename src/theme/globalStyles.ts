import { injectGlobal } from '.'
import device from './devices'
import importFonts from './fonts'
import palette from './palette'

export default () => {
  injectGlobal`
    ${importFonts()}

    html {
      box-sizing: border-box;
      font-size: 20px;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      font-family: 'EB Garamond', serif;
      color: ${palette.offBlack};
      font-size: 1rem;
      background-color: ${palette.offWhite};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
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
