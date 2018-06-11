import React from 'react'
import styled from 'theme'

import { IProps, IDefaultProps, IState } from './EventsPanel.d'

const EventsPanel = styled.div`
  display: flex;
  flex: 1 1 15vh;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { children } = this.props
    return (
      <EventsPanel>
        {children}
      </EventsPanel>
    )
  }
}
