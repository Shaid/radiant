import React from 'react'
import styled from 'theme'

import Actor from 'components/Actor'
import EventsPanel from 'components/EventsPanel'
import Room from 'components/Room'
import StatusPanel from 'components/StatusPanel'

import { IProps, IDefaultProps, IState } from './UI.d'

const UI = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem;
  height: 100%;

  @media all and (orientation: landscape) {
    margin: 2rem;
  }
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props as PropsWithDefaults
    return (
      <UI>
        <Room />
        <EventsPanel>
          <Actor />
        </EventsPanel>
        <StatusPanel />
      </UI>
    )
  }
}
