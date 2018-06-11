import React from 'react'

import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

const Action = styled.button`
  display: flex;
  flex: 1 1 auto;
  color: ${theme.primaryColour};
  background: transparent;
  border: none;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline solid #bbb;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { children, onClick } = this.props

    return (
      <Action onClick={() => onClick()}>
        {children}
      </Action>
    )
  }
}
