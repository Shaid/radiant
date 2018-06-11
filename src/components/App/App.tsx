import React from 'react'
import { observer } from 'mobx-react'
import styled, { ThemeProvider, theme } from 'theme'

import UITest from 'components/UITest'
import { IProps } from './App.d'

const App = styled.div`
  display: inherit;
`

@observer
class AppContainer extends React.Component<IProps> { // eslint-disable-line
  render() { // eslint-disable-line
    // const store = this.props.store
    return (
      <ThemeProvider theme={theme}>
        <App>
          <UITest />
        </App>
      </ThemeProvider>
    )
  }
}

export default AppContainer
