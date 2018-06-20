import React from 'react'
import styled, { breakpoints, theme } from 'theme'
import { rgba } from 'polished'

import { IProps, IDefaultProps, IState } from './MultiAction.d'

interface IButtonStyled {
  active: boolean
}

interface IActionsStyled {
  active: boolean
  count: number
}

const MultiAction = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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

const positionItems = (count: number, active: boolean) => {
  let positions = ''

  for (let i = 1; i <= count; i++) {
    positions += `
    &:nth-of-type(${i}) {
      transform: translateY(${active ? 2.0 * i : 0}rem);

      @media ${breakpoints.desktop} {
        transform: translateY(${active ? 1.25 * i : 0}rem);
      }
    }
    `
  }

  return `
  > button {
    display: block;
    ${applyButtonStyle()}
    cursor: ${active ? 'pointer' : 'default'};
    position: absolute;
    min-width: 100px;
    font-size: 1.3rem;
    font-variant: small-caps;
    text-decoration: none;
    transition: transform 0.2s ease-in;
    left: 0;
    top: 10px;
    ${positions}

    :hover {
      background-color: ${rgba(theme.primaryColourDecorate, 0.2)};
      border-radius: 5px;
    }

    @media ${breakpoints.desktop} {
      font-size: 1.1rem;
    }
  }`
}

const ActionsList = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;
  position: absolute;
  top: 0;
  width: 100px;
  opacity: ${(props: IActionsStyled) => (props.active ? '1' : '0')};
  visibility: ${(props: IActionsStyled) => (props.active ? 'visible' : 'hidden')};
  border-radius: 50%;
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in, transform 0.2s ease-in;
  ${(props: IActionsStyled) => (props.active ? 'z-index: 500;' : 'z-index: -1;')}
  ${(props: IActionsStyled) => positionItems(props.count, props.active)}
`

export default class extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  constructor(props: IProps, state: IState) {
    super(props, state)

    this.state = {
      active: false
    }
  }

  setInactive = (event: Event) => {
    event.stopImmediatePropagation()
    this.setActive(false)
  }

  setActive(active: boolean) {
    if (active) {
      document.addEventListener('click', this.setInactive, false)
    } else {
      document.removeEventListener('click', this.setInactive, false)
    }

    // add observer to check if offscreen.
    const ioOptions = {
      root: null,
      rootMargin: '10px',
      threshold: 1.0
    }
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < 1) {
          const el:any = entry.target
          // const elStyle = window.getComputedStyle(el!)
          const x = Math.min(0, entry.boundingClientRect.left, entry.boundingClientRect.right)
          const y = Math.min(0, entry.boundingClientRect.top, entry.boundingClientRect.bottom)

          if (x < 0) { console.log(`left ${-x}`); el.style.left = `${-x}px` }
          if (y < 0) { el.style.top = `${-y}px` }
        }
      })
    }, ioOptions)

    Array.from(this.actionsRef.current.children).forEach((child: Element) => {
      intersectionObserver.observe(child)
    })

    this.setState({
      active
    })
  }

  actionsRef:any = React.createRef()

  render() {
    const { actions, children } = this.props
    const { active } = this.state

    const actionsList = actions.map((action) => (
      <button
        onClick={(event) => {
          if (active) {
            event.stopPropagation()
            action.callback()
            this.setActive(false)
          }
        }}
        key={action.label}
        title={action.label}
      >
        {action.label}
      </button>
    ))

    return (
      <MultiAction>
        <Button
          active={active}
          onClick={(event) => {
            event.stopPropagation()
            this.setActive(true)
          }}
        >
          {children}
        </Button>
        <ActionsList innerRef={this.actionsRef} count={actionsList.length} active={active} >
          {actionsList}
        </ActionsList>
      </MultiAction>
    )
  }
}
