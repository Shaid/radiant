import React from 'react'
import styled from 'theme'

import { IProps, IDefaultProps, IState } from './Exit.d'

const Exit = styled.div`
  display: flex;
`

export default class extends React.PureComponent<IProps, IState> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: Partial<IDefaultProps> = {}

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Exit>
        Generated component: Exit
      </Exit>
    )
  }
}
