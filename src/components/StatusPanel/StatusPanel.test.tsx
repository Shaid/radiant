import React from 'react'
import { shallow } from 'enzyme'

import StatusPanel from '.'

describe('<StatusPanel />', () => {
  it('renders', () => {
    const wrapper = shallow(<StatusPanel />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for StatusPanel')
})
