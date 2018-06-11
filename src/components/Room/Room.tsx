import React from 'react'

import styled from 'theme'

import { IProps, IDefaultProps, IState } from './Room.d'

const Room = styled.div`
  display: flex;
  flex: 1 1 auto;
`

const RoomDescription = styled.div`
  flex: 1 1 auto;
`

const AreaName = styled.blockquote`
  font-size: 1.25rem;
  margin: 1rem 0;
`

const RoomName = styled.blockquote`
  font-size: 1.5rem;
  margin: 1rem 0;
`

const Exits = styled.nav`
  font-size: 1rem;
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Room>
        <RoomDescription>
          <AreaName>Villespont, <em>the City of Bridges</em></AreaName>
          <RoomName><strong>Lower Arch Station</strong>, the demilitarised zone</RoomName>
          <p>On a nearby corner a violin sings; the cadence of its bow dancing in time with the rhythm of your thoughts.</p>
          <p>You feel the weight of the bridges above you.</p>
          <Exits>
            <div>A bridge stretches away to the east.</div>
            <div>There is a closed door at the end of the platform.</div>
          </Exits>
        </RoomDescription>
      </Room>
    )
  }
}
