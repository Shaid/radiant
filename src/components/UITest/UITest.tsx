import React from 'react'
import styled from 'theme'

import Actor from 'components/Actor'

import { IProps, IDefaultProps, IState } from './UITest.d'

const UIContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem;
  height: 100%;

  @media all and (orientation: landscape) {
    margin: 2rem;
  }
`
const RoomDescription = styled.div`
  flex: 1 1 auto;
`

const ActionPanel = styled.div`
  flex: 1 1 auto;
`

const StatusBar = styled.div`
  flex: 0 1 15%;
  margin-top: auto;
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

class UITest extends React.PureComponent<IProps, IState> { // eslint-disable-line
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line
    // const {} = this.props as PropsWithDefaults
    return (
      <UIContainer>
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
        <ActionPanel>
          <Actor />
        </ActionPanel>
        <StatusBar>
          <p>It is late in the day.</p>
          <p>You feel oppressed, and hungry.</p>
        </StatusBar>
      </UIContainer>
    )
  }
}

export default UITest
