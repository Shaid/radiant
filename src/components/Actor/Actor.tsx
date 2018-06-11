import React from 'react'
import styled from 'theme'

import Action from 'components/Action'

import { IProps, IDefaultProps, IState } from './Actor.d'

const Actor = styled.div`
  flex: 1 1 20px;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  interact() { // eslint-disable-line class-methods-use-this
    console.log('interacting with actor')
  }

  render() {
    // const {} = this.props as PropsWithDefaults
    return (
      <Actor>
        <Action onClick={this.interact}>
          A young lady is here. She seems bored.
        </Action>
      </Actor>
    )
  }
}
