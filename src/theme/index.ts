import * as styledComponents from 'styled-components'
import { darken } from 'polished'

import breakpoints from './breakpoints'
import { IThemeInterface } from './index.d'
import palette from './palette'


const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  withTheme,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>

// example for theme
export const theme = {
  alert: palette.red,
  black: palette.black,
  notice: palette.yellow,
  offBlack: palette.offBlack,
  offWhite: palette.offWhite,
  primaryColour: palette.offWhite,
  primaryColourDecorate: darken(0.5, palette.offWhite),
  primaryBackground: palette.offBlack,
}

export const cssNullTransform = 'transform: translate3d(0, 0, 0);'

export default styled
export { css, breakpoints, keyframes, injectGlobal, withTheme, ThemeProvider }
