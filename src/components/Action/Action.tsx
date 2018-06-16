import React from 'react'
import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

interface IButtonStyled {
  active: boolean
}

const Action = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

const applyButtonStyle = () => `
  color: ${theme.primaryColour};
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline solid ${theme.primaryColourDecorate};

  :focus {
    outline: none;
  }
`

const Button = styled.button`
  position: relative;
  ${applyButtonStyle()}
  ${(props: IButtonStyled) => (props.active ? `z-index: 500; box-shadow: inset 0 0 0 0 ${theme.primaryBackground}, 0 15vh 25vh 25vh ${theme.primaryBackground}; border-radius: 5vh;` : '')}
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps, state: IState) {
    super(props, state)

    this.state = {
      active: false
    }
  }

  render() {
    const { children, onClick } = this.props
    const { active } = this.state

    return (
      <Action>
        <Button
          active={active}
          onClick={(event) => {
            event.stopPropagation()
            onClick()
          }}
        >
          {children}
        </Button>
      </Action>
    )
  }
}
