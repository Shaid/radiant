import React from 'react'
import styled from 'theme'

import Action from 'components/Action'
import {
  IExit, IProps, IDefaultProps, IState
} from './Exits.d'

const Exits = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  align-items: flex-start;
`

const Exit = styled.div`
  padding: 0.5rem 0;
  display: inline-block;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { action, exits } = this.props

    const exitActions = exits.map((exit: IExit) => (
      <Exit key={exit.id}>
        <Action onClick={() => action(exit.destination)}>
          {exit.description}
        </Action>
      </Exit>
    ))

    return (
      <Exits>
        {exitActions}
      </Exits>
    )
  }
}
