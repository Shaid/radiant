'use client'

import Image from "next/image";

import React from 'react'
import styled, { ThemeProvider, theme } from '../../lib/theme'
import GlobalStyle from '../../lib/theme/globalStyles'
import UI from '../../lib/components/UI'

const App = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`

export interface IProps {
  children?: object // TODO: set to null in defaultProps
}

class AppContainer extends React.Component<IProps> { // eslint-disable-line react/prefer-stateless-function
  render() { // eslint-disable-line class-methods-use-this
    // const store = this.props.store
    return (
      <ThemeProvider theme={theme}>
        <App suppressHydrationWarning>
          <GlobalStyle />
          <UI />
        </App>
      </ThemeProvider>
    )
  }
}

export default AppContainer