import React from 'react'
import { observer } from 'mobx-react'

import styled, { ThemeProvider, theme } from 'theme'
import { IProps } from './App.d'

const App = styled.div`
  display: inherit;
`

@observer
class AppContainer extends React.PureComponent<IProps> {
  render() {
    const store = this.props.store
    console.log(store)
    return (
      <ThemeProvider theme={theme}>
        <App>
          <h1> RADIANT! </h1>
        </App>
      </ThemeProvider>
    )
  }
}

export default AppContainer
