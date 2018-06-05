import React from 'react'
import { shallow } from 'enzyme'

import UITest from '.'

describe('<UITest />', () => {
  it('renders', () => {
    const wrapper = shallow(<UITest />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for UITest')
})
