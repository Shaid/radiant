import React from 'react'

import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

interface StyledProps {
  active: boolean
}

const Action = styled.button`
  display: flex;
  flex: 1 1 auto;
  color: ${theme.primaryColour};
  background: transparent;
  border: none;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  text-decoration: underline solid #bbb;
  ${(props: StyledProps) => (props.active ? `box-shadow: inset 0 0 500px 500px ${theme.primaryBackground}, 0 0 500px 500px ${theme.primaryBackground}` : '')};
  transition: box-shadow 0.2s ease-in-out;

  :focus {
    outline: none;
  }
`


export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps, state: IState) {
    super(props, state)

    this.state = {
      active: false
    }
  }

  setActive(active: boolean) {
    this.setState({
      active
    })
  }

  render() {
    const { children, onClick } = this.props
    const { active } = this.state

    return (
      <Action
        active={active}
        onClick={() => {
          this.setActive(true)
          onClick()
        }}

        onBlur={() => {
          this.setActive(false)
        }}
      >
        {children}
      </Action>
    )
  }
}
