import React from 'react'
import styled from 'theme'

import { IProps, IDefaultProps, IState } from './UITest.d'

const UIContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`
const RoomDescription = styled.div`
  margin: 2rem;
`

const ActionPanel = styled.div`
  margin: 2rem;
`

const StatusBar = styled.div`
  margin: auto 2rem 2rem 2rem;
`

const AreaName = styled.blockquote`
  font-size: 1.25rem;
  margin: 1rem 0;
`

const RoomName = styled.blockquote`
  font-size: 1.5rem;
  margin: 1rem 0;
`


class UITest extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    // const {} = this.props as PropsWithDefaults
    return (
      <UIContainer>
        <RoomDescription>
          <AreaName>Villespont, <em>the City of Bridges</em></AreaName>
          <RoomName><strong>Lower Arch Station</strong>, the demilitarised zone</RoomName>
          <p>On a nearby corner a violin sings; the cadence of its bow dancing in time with the rhythm of your thoughts.</p>
          <p>You feel the weight of the bridges above you.</p>
        </RoomDescription>
        <ActionPanel>
          A young lady is here. She seems bored.
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
