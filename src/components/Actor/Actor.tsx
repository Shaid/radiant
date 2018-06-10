import React from 'react'

import Action from 'components/Action'

import { IProps, IDefaultProps, IState } from './Actor.d'

class Actor extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  interact() { // eslint-disable-line
    console.log('interacting with actor')
  }

  render() {
    // const {} = this.props as PropsWithDefaults
    return (
      <Action onClick={this.interact}>
        A young lady is here. She seems bored.
      </Action>
    )
  }
}

export default Actor
