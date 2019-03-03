import React from 'react'
import styled from 'theme'
import { defaultButtonStyle } from 'theme/helpers'

import { IProps, IDefaultProps, IState } from './Action.d'

const Action = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

const Button = styled.button`
  position: relative;
  ${defaultButtonStyle}
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
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
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
