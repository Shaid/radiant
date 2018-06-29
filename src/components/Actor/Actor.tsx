import React from 'react'
import styled from 'theme'

import Interaction from 'components/Interaction'
import { IAction } from 'components/Interaction/Interaction.d'
import { IProps, IDefaultProps, IState } from './Actor.d'

const Actor = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.5rem 0;
`

const getActorDisplay = (actor: any) => {
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

const getActorDescription = (actor: any) => {
  const pronoun = actor.gender === 'female' ? 'she' : 'he'

  return `${pronoun} looks ${actor.status}`
}

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { actor } = this.props

    const actions:Array<IAction> = [
      { label: 'talk to', callback: () => { console.log(`action: talk to ${actor.name}`) } },
      { label: 'inspect', callback: () => { console.log(`action: look at ${actor.name}`) } },
    ]

    return (
      <Actor>
        <Interaction actions={actions} description={getActorDescription(actor)}>
          {getActorDisplay(actor)}
        </Interaction>&nbsp;is here.
      </Actor>
    )
  }
}
