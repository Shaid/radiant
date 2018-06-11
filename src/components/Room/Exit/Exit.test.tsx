import React from 'react'
import { shallow } from 'enzyme'

import Exit from '.'

describe('<Exit />', () => {
  it('renders', () => {
    const wrapper = shallow(<Exit />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for Exit')
})
