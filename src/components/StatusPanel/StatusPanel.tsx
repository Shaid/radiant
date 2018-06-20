import React from 'react'
import { transparentize } from 'polished'
import styled, { breakpoints, theme } from 'theme'

import { IProps, IState } from './StatusPanel.d'

const StatusPanel = styled.div`
  display: flex;
  flex: 0 0 15vh;
  flex-flow: column nowrap;
  margin-top: auto;
  align-items: flex-start;
  justify-content: flex-end;
  border-top: 1px solid ${transparentize(0.75, theme.primaryColourDecorate)};
  padding-top: 1rem;

  @media ${breakpoints.desktop} {
    flex: 0 0 5vh;
    padding: 0;
    flex-flow: row nowrap;
    align-items: center;
  }
`

const TimeOfDay = styled.div`
  margin: 1rem 0 0 0;

  @media ${breakpoints.desktop} {
    margin: 0 0 0 auto;
  }
`

const PlayerStatus = styled.div`
  display: block;

  p {
    padding: 0;
    margin: 0;
  }
`

const Good = styled.span`
  color: ${theme.info};
  font-weight: bold;
`

const Bad = styled.span`
  color: ${theme.alert};
  font-weight: bold;
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  // static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props
    return (
      <StatusPanel>
        <PlayerStatus><p>You are <Bad>bleeding</Bad> and <Good>in good health</Good>.</p><p>You feel oppressed, and hungry.</p></PlayerStatus>
        <TimeOfDay>It is late in the day.</TimeOfDay>
      </StatusPanel>
    )
  }
}
