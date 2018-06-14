import React from 'react'

import styled, { theme } from 'theme'

import { IProps, IDefaultProps, IState } from './Action.d'

interface IButtonStyled {
  active: boolean
}

interface IActionsStyled {
  active: boolean
  count: number
  radius: number
  itemSize: number
}

const Action = styled.div`
  display: flex;
`

const applyButtonStyle = () => `
color: ${theme.primaryColour};
background: transparent;
border: none;
font-family: 'EB Garamond', serif;
font-size: 1rem;
cursor: pointer;
text-decoration: underline solid #bbb;

:focus {
  outline: none;
}
`

const Button = styled.button`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  ${applyButtonStyle()}
  ${(props: IButtonStyled) => (props.active ? `z-index: 500; box-shadow: inset 0 0 0 0 ${theme.primaryBackground}, 0 0 25vh 25vh ${theme.primaryBackground}` : '')};
  transition: box-shadow 0.2s ease-in-out;
`

const positionOnCircle = (count: number, radius: number, itemSize: number, active: boolean) => {
  const angle = 360 / count
  let rot = 270
  let angles = ''

  for (let i = 1; i <= count; i++) {
    angles += `
    &:nth-of-type(${i}) {
      transition: transform 0.2s ease-in-out;

      transform:
        rotate(${rot * 1}deg)
        translate(${active ? radius / 2 : 0}px)
        rotate(${rot * -1}deg);
    }
    `

    rot += angle
  }

  return `
  > button {
    flex: 1 1 auto;
    display: block;
    ${applyButtonStyle()}
    cursor: ${active ? 'pointer' : 'default'};
    position: absolute;
    top:  50%;
    left: 50%;
    width:  ${itemSize}px;
    // height: ${itemSize}px;
    margin: -${(itemSize / 2)}px;
    transform: translate(100);

    ${angles}
  }`
}

const ActionsList = styled.div`
  position: absolute;
  display: flex;
  opacity: ${(props: IActionsStyled) => (props.active ? '1' : '0')};
  flex-flow: column;
  width: ${(props: IActionsStyled) => props.radius}px;
  height: ${(props: IActionsStyled) => props.radius}px;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  transition: opacity 0.2s ease-in-out;
  ${(props: IActionsStyled) => (props.active ? 'z-index: 500;' : '')}
  ${(props: IActionsStyled) => positionOnCircle(props.count, props.radius, props.itemSize, props.active)}
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps, state: IState) {
    super(props, state)

    this.state = {
      active: false
    }
  }

  setInactive = () => {
    this.setActive(false)
  }

  setActive(active: boolean) {
    if (active) {
      document.addEventListener('click', this.setInactive, false)
    } else {
      document.removeEventListener('click', this.setInactive, false)
    }

    this.setState({
      active
    })
  }

  render() {
    const { actions, children, onClick } = this.props
    const { active } = this.state

    const actionList = actions.map((action) => (
      <button
        onClick={(event) => {
          if (active) {
            event.stopPropagation()
            action.callback()
            this.setInactive()
          }
        }}
        key={action.label}
      >
        {action.label}
      </button>
    ))

    return (
      <Action>
        <Button
          active={active}
          onClick={() => {
            this.setActive(true)
            onClick()
          }}
        >
          {children}
        </Button>
        <ActionsList count={actionList.length} radius={250} itemSize={150} active={active} >
          {actionList}
        </ActionsList>
      </Action>
    )
  }
}
