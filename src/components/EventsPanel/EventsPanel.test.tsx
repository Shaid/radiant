import React from 'react'
import { shallow } from 'enzyme'

import EventsPanel from '.'

describe('<EventsPanel />', () => {
  it('renders', () => {
    const wrapper = shallow(<EventsPanel />)
    expect(wrapper).toMatchSnapshot()
  })

  // @TODO: tests for EventsPanel
})
