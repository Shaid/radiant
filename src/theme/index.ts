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
  marineBlue: palette.marineBlue,
  notice: palette.yellow,
  primaryColour: palette.marineBlue,
  offWhite: palette.offWhite,
}

export default styled
export { css, injectGlobal, keyframes, withTheme, ThemeProvider }
