import React from 'react'
import { shallow } from 'enzyme'

import Actor from '.'

describe('<Actor />', () => {
  it('renders', () => {
    const wrapper = shallow(<Actor />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for Actor')
})
