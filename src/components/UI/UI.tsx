import React from 'react'
import styled, { breakpoints } from 'theme'

import EventsPanel from 'components/EventsPanel'
import Room from 'components/Room'
import StatusPanel from 'components/StatusPanel'

import { IProps, IDefaultProps, IState } from './UI.d'

const UI = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  position: relative;
  padding: 1rem;

  @media ${breakpoints.desktop} {
    padding: 0 1.5rem;
  }
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props as PropsWithDefaults
    return (
      <UI>
        <Room />
        <EventsPanel />
        <StatusPanel />
      </UI>
    )
  }
}
