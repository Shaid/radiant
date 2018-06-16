import React from 'react'
import { shallow } from 'enzyme'

import Room from '.'

describe('<Room />', () => {
  it('renders', () => {
    const wrapper = shallow(<Room />)
    expect(wrapper).toMatchSnapshot()
  })
})
