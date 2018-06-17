import React from 'react'

import styled from 'theme'

import Actor from 'components/Actor'
import Exits from './Exits'
import { IProps, IDefaultProps, IState } from './Room.d'

const Room = styled.div`
  display: flex;
  flex: 1 1 auto;
`

const RoomDescription = styled.div`
  flex: 1 1 auto;
`

const AreaName = styled.blockquote`
  font-size: 1.25rem;
  margin: 1rem 0;
`

const RoomName = styled.blockquote`
  font-size: 1.5rem;
  margin: 1rem 0;
`

const Actors = styled.div`
  flex: 1 1 auto;
  margin: 1rem 0;
`

// @todo Make room and it's travelTo() call use external props and state. Room should be from a store, etc.
const rooms = require('data/world/rooms.json')
const zones = require('data/world/zones.json')
const actors = require('data/actors/actors.json')

const getRandomActor = () => actors[Math.floor(Math.random() * actors.length)]


export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps) {
    super(props)

    this.state = {
      currentRoom: 0
    }
  }

  travelTo = (destination: number) => {
    this.setState({
      currentRoom: destination
    })
  }

  render() { // eslint-disable-line class-methods-use-this
    const room = rooms[this.state.currentRoom]
    const zone = zones[room.zone]
    const sector = zone.sectors[room.sector]

    return (
      <Room>
        <RoomDescription>
          <AreaName>{zone.name}, <em>{zone.shortTitle}</em></AreaName>
          <RoomName><strong>{room.name}</strong>, {sector.name}</RoomName>
          {room.description.map((paragraph: string) => (<p key={paragraph}>{paragraph}</p>))}
          <Exits action={this.travelTo} exits={room.exits} />
          <Actors>
            <Actor actor={getRandomActor()} />
          </Actors>
        </RoomDescription>
      </Room>
    )
  }
}
