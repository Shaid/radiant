import React from 'react'
import styled from 'theme'

import { IProps, IState } from './StatusPanel.d'

const StatusPanel = styled.div`
  flex: 0 1 15%;
  margin-top: auto;
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  // static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props
    return (
      <StatusPanel>
        <p>It is late in the day.</p>
        <p>You feel oppressed, and hungry.</p>
      </StatusPanel>
    )
  }
}
