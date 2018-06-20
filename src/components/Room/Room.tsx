import React from 'react'

import styled, { breakpoints, theme } from 'theme'
import { transparentize } from 'polished'
import Actor from 'components/Actor'
import Exits from './Exits'
import { IProps, IDefaultProps, IState } from './Room.d'

const Room = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
`

const RoomDescription = styled.div`
  flex: 1 1 auto;
`

const LocationDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 1 auto;
  border-bottom: 1px solid ${transparentize(0.75, theme.primaryColourDecorate)};

  @media ${breakpoints.desktop} {
    flex-flow: row nowrap;
    align-items: flex-end;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`

const RoomName = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-weight: normal;

  @media ${breakpoints.desktop} {
    font-size: 1.5rem;
  }
`

const AreaName = styled.h2`
  font-size: 0.9rem;
  font-weight: normal;

  @media ${breakpoints.desktop} {
    margin: 0 0 0 auto;
    font-size: 1.5rem;
  }
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
        <LocationDetails>
          <RoomName><strong>{room.name}</strong>, {sector.name}</RoomName>
          <AreaName>{zone.name}, <em>{zone.shortTitle}</em></AreaName>
        </LocationDetails>
        <RoomDescription>
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
