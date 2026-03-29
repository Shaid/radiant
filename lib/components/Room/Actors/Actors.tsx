'use client'

import React from 'react'
import styled from '../../../theme'

import { IActor } from '../../Actor/Actor.d'
import Actor from '../../Actor'

import {
  IProps, IDefaultProps, IState
} from './Actors.d'

const Actors = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  align-items: flex-start;
`


export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { actors } = this.props
    const actorItems = (actors && actors.length > 0) ? actors.map(actor => (<Actor id={actor} />)) : ('')

    return (
      <Actors>
        {actorItems}
      </Actors>
    )
  }
}