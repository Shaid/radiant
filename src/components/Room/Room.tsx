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

const Text = styled.div`
  p {
    text-indent: 1rem;
    margin: 0 0 0.5rem 0;

    /*
    :first-of-type {
      text-indent: 0;
    }
    */
  }
`

const LocationDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 1 auto;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${transparentize(0.75, theme.primaryColourDecorate)};

  @media ${breakpoints.desktop} {
    flex-flow: row nowrap;
    align-items: center;
    height: 6vh;
  }
`

const RoomName = styled.h1`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  order: 2;

  @media ${breakpoints.desktop} {
    margin: 0;
    order: 1;
    font-size: 1.25rem;
  }
`

const AreaName = styled.h2`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  font-style: italic;
  order: 1;

  @media ${breakpoints.desktop} {
    order: 2;
    margin: 0 0 0 auto;
    font-size: 1.25rem;
  }

  strong {
    font-variant: small-caps;
  }
`

const Interactions = styled.div`
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
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
      currentRoom: 0,
    }
  }

  travelTo = (destination: number) => {
    this.setState({
      currentRoom: destination,
    })
  }

  render() { // eslint-disable-line class-methods-use-this
    const { currentRoom } = this.state
    const room = rooms[currentRoom]
    const zone = zones[room.zone]
    const sector = zone.sectors[room.sector]

    return (
      <Room>
        <LocationDetails>
          <RoomName>
            <strong>{room.name}</strong>
            {' '}
            {sector.name}
          </RoomName>
          <AreaName>
            <strong>{zone.name}</strong>
            {' '}
&ndash;
            {' '}
            {zone.shortTitle}
          </AreaName>
        </LocationDetails>
        <RoomDescription>
          <Text>
            {room.description.map((paragraph: string) => (<p key={paragraph}>{paragraph}</p>))}
          </Text>
          <Interactions>
            <Exits action={this.travelTo} exits={room.exits} />
            <Actors>
              <Actor actor={getRandomActor()} />
            </Actors>
          </Interactions>
        </RoomDescription>
      </Room>
    )
  }
}
