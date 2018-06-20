import React from 'react'
import styled, { breakpoints } from 'theme'

import EventsPanel from 'components/EventsPanel'
import Room from 'components/Room'
import StatusPanel from 'components/StatusPanel'

import { IProps, IDefaultProps, IState } from './UI.d'

const UI = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem;
  height: 100%;
  position: relative;

  @media ${breakpoints.desktop} {
    margin: 2rem;
  }

  ::after {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #dadada;
    opacity: 0.8;
    transform: rotateZ(0);
    display: none;
    transition: opacity 0.2s ease-in-out;
    content: " ";
  }
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    // const {} = this.props as PropsWithDefaults
    return (
      <UI>
        <Room />
        <EventsPanel />
        <StatusPanel />
      </UI>
    )
  }
}
