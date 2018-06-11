import React from 'react'
import { shallow } from 'enzyme'

import Actor from '.'

describe('<Actor />', () => {
  it('renders', () => {
    const wrapper = shallow(<Actor />)
    expect(wrapper).toBeDefined()
  })

  it('TODO: tests for Actor')
})
