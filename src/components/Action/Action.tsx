import React from 'react'
import { transparentize } from 'polished'
import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

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
  text-decoration: underline solid ${transparentize(0.25, theme.primaryColourDecorate)};

  :focus {
    outline: none;
  }
`

const Button = styled.button`
  position: relative;
  ${applyButtonStyle()}
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: left;
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    const { children, onClick } = this.props

    return (
      <Action>
        <Button
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
