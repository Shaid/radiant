import React from 'react'
import { observer } from 'mobx-react'
import styled, { ThemeProvider, theme } from 'theme'

import UI from 'components/UI'
import { IProps } from './App.d'

const App = styled.div`
  display: inherit;
`

@observer
class AppContainer extends React.Component<IProps> { // eslint-disable-line react/prefer-stateless-function
  render() { // eslint-disable-line class-methods-use-this
    // const store = this.props.store
    return (
      <ThemeProvider theme={theme}>
        <App>
          <UI />
        </App>
      </ThemeProvider>
    )
  }
}

export default AppContainer
