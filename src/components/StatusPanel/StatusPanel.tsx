import React from 'react'
import { transparentize } from 'polished'
import styled, { breakpoints, theme } from 'theme'

import { IProps, IState } from './StatusPanel.d'

const StatusPanel = styled.div`
  display: flex;
  flex: 0 1 10vh;
  flex-flow: column nowrap;
  margin-top: auto;
  align-items: flex-start;
  justify-content: flex-end;
  border-top: 1px solid ${transparentize(0.75, theme.primaryColourDecorate)};
  padding-top: 1rem;
  font-size: 0.9rem;

  @media ${breakpoints.desktop} {
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
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  // static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props
    return (
      <StatusPanel>
        <PlayerStatus>You feel oppressed, and hungry.</PlayerStatus>
        <TimeOfDay>It is late in the day.</TimeOfDay>
      </StatusPanel>
    )
  }
}
