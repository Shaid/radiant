import React from 'react'
import { shallow } from 'enzyme'

import Action from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<Action onClick={jest.fn} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers its action when clicked', () => {
    const click = jest.fn()

    const wrapper = shallow(<Action onClick={click} />)
    wrapper.simulate('click')
    expect(click).toHaveBeenCalled()
  })
})
