'use client'

import React from 'react'
import styled from '../../theme'

import Interaction from '../Interaction'
import { IAction } from '../Interaction/Interaction.d'
import { IActor, IProps, IDefaultProps, IState } from './Actor.d'

const Actor = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.5rem 0;
`
const actors = require('../../../data/actors/actors.json')

const getActorById = (id: number) => {
  return actors[id]
}

const getActorDisplay = (actor: IActor) => {
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

  if(actor.role) { 
    return `A ${actor.role}`
  }

  return `A ${age} ${gender}`
}

const getActorDescription = (actor: any) => {
  const pronoun = actor.gender === 'female' ? 'she' : 'he'

  return `${pronoun} looks ${actor.status}`
}

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}
  
  render() {
    const { id } = this.props
    const actor = getActorById(id)

    const actions:Array<IAction> = [
      { label: 'talk to', callback: () => { console.log(`action: talk to ${actor.name}`) } },
      { label: 'inspect', callback: () => { console.log(`action: look at ${actor.name}`) } },
    ]

    return (
      <Actor>
        <Interaction actions={actions} description={getActorDescription(actor)}>
          {getActorDisplay(actor)}
        </Interaction>
&nbsp;is here.
      </Actor>
    )
  }
}
