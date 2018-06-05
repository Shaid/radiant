import React from 'react'
import styled from 'theme'

import { IProps, IDefaultProps, IState } from './UITest.d'

const Content = styled.div`
  margin: 2rem;
`

const Quote = styled.blockquote`
  font-size: 2rem;
  margin: 1rem 0;
`

class UITest extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IDefaultProps> = {}

  render() {
    // const {} = this.props as PropsWithDefaults
    return (
      <Content>
        <p>Alone, you wait, ready to cross.</p>
        <p>On a nearby corner a violin sings; the cadence of its bow dancing in time with the rhythm of your thoughts.</p>
        <p>A <strong>moment of inchoate longing</strong> builds inside you, wishing to step into that oncoming rush and </p>
        <Quote>allowing it to carry you away to a quieter place,</Quote>
        <p>to that inevitable finality where all music stops (<em>where breath ceases</em>)</p>
        <p>the place where I wait for you.</p>
      </Content>
    )
  }
}

export default UITest
