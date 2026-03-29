'use client'

import React, { ReactNode } from 'react'
import styled from '../../theme'

import { IProps, IDefaultProps, IState } from './EventsPanel.d'

const EventsPanel = styled.div`
  display: flex;
  flex: 1 1 15vh;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 5px;
`

export default class extends React.Component<IProps, IState> {
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
