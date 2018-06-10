import React from 'react'

import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

const ActionButton = styled.button`
  background: transparent;
  border: none;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline dotted #aaa;
  color: ${theme.primaryColour};
`

class Action extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { children, onClick } = this.props
    return (
      <ActionButton onClick={() => onClick()}>
        {children}
      </ActionButton>
    )
  }
}

export default Action
