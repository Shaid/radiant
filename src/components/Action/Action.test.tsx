import React from 'react'
import { mount, shallow } from 'enzyme'

import Action from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<Action onClick={jest.fn} actions={[]} />)
    expect(wrapper).toMatchSnapshot()
  })

  // skipped until I mock IntersectionObserver
  it.skip('triggers its action when clicked', () => {
    const click = jest.fn()

    const wrapper = mount(<Action onClick={click} actions={[]} />)
    wrapper.find('button').simulate('click')
    expect(click).toHaveBeenCalled()
  })
})
