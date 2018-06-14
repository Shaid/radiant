import React from 'react'
import { shallow } from 'enzyme'

import Action from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<Action onClick={jest.fn} actions={[]} />)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('triggers its action when clicked', () => {
    const click = jest.fn()

    const wrapper = shallow(<Action onClick={click} actions={[]} />)
    wrapper.simulate('click')
    expect(click).toHaveBeenCalled()
  })
})
