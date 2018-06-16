import React from 'react'
import styled from 'theme'

import Action from 'components/Action'
import { IExit, IProps, IDefaultProps, IState } from './Exits.d'

const Exits = styled.nav`
  font-size: 1rem;
`

const Exit = styled.div`
  padding: 0.5rem 0;
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { exits } = this.props

    const exitActions = exits.map((exit: IExit) => (
      <Exit key={exit.id}>
        <Action
          onClick={() => this.props.action(exit.destination)}
        >
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
