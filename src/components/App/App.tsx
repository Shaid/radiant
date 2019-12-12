import React from 'react'
import { observer } from 'mobx-react'
import styled, { ThemeProvider, theme } from 'theme'
import GlobalStyle from 'theme/globalStyles'
import UI from 'components/UI'
import { IProps } from './App.d'

const App = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`

@observer
class AppContainer extends React.Component<IProps> { // eslint-disable-line react/prefer-stateless-function
  static displayName: 'AppContainer'

  render() { // eslint-disable-line class-methods-use-this
    // const store = this.props.store
    return (
      <ThemeProvider theme={theme}>
        <App>
          <GlobalStyle />
          <UI />
        </App>
      </ThemeProvider>
    )
  }
}

export default AppContainer
