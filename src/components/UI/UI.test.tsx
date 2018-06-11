import React from 'react'
import { shallow } from 'enzyme'

import UI from '.'

describe('<UI />', () => {
  it('renders', () => {
    const wrapper = shallow(<UI />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for UI')
})
