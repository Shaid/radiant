import React from 'react'
import styled from 'theme'

import MultiAction from 'components/MultiAction'
import { IAction } from 'components/MultiAction/MultiAction.d'
import { IProps, IDefaultProps, IState } from './Actor.d'

const Actor = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.5rem 0;
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

  if ((Math.random() * 2) > 1) {
    return `A ${age} ${gender}`
  }
  return actor.name
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

    const actions:Array<IAction> = [
      { label: 'talk to', callback: () => { console.log(`action: talk to ${this.state.actor.name}`) } },
      { label: 'inspect', callback: () => { console.log(`action: look at ${this.state.actor.name}`) } },
    ]

    return (
      <Actor>
        <MultiAction actions={actions}>
          {getActorDescription(this.state.actor)}
        </MultiAction>&nbsp;is here.
      </Actor>
    )
  }
}
