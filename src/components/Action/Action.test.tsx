import React from 'react'
import { shallow } from 'enzyme'

import Action from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<Action />)
    expect(wrapper).toMatchSnapshot()
  })

  it('TODO: tests for Action')
})
