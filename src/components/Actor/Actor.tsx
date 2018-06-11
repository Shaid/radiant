import React from 'react'
import styled from 'theme'

import Action from 'components/Action'
import { IProps, IDefaultProps, IState } from './Actor.d'

const Actor = styled.div`
  flex: 1 1 20px;
`

const actors = require('data/actors/actors.json')

const getRandomActor = () => actors[Math.floor(Math.random() * actors.length)]

const getActorDescription = (actor: any) => {
  const age = ((a) => {
    if (a < 35) {
      return 'young'
    }

    if (a > 65) {
      return 'old'
    }

    return 'middle-aged'
  })(actor.age)

  const gender = actor.gender === 'female' ? 'woman' : 'man'

  return `A ${age} ${gender}`
}


export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps) {
    super(props)

    this.state = {
      actor: getRandomActor()
    }
  }

  interact() {
    console.log(`interacting with actor: ${this.state.actor.name}`)
  }

  render() {
    // const {} = this.props as PropsWithDefaults
    return (
      <Actor>
        <Action onClick={() => this.interact()}>
          {getActorDescription(this.state.actor)} is here.
        </Action>
      </Actor>
    )
  }
}
