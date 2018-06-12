import * as styledComponents from 'styled-components'

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
  primaryColour: palette.offBlack,
  primaryBackground: palette.offWhite,
}

export default styled
export { css, keyframes, injectGlobal, withTheme, ThemeProvider }
