import React from 'react'
import { mount, shallow } from 'enzyme'

import MultiAction from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<MultiAction actions={[]} />)
    expect(wrapper).toMatchSnapshot()
  })

  // skipped until I mock IntersectionObserver
  it.skip('triggers its action when clicked', () => {
    const click = jest.fn()

    const wrapper = mount(<MultiAction actions={[]} />)
    wrapper.find('button').simulate('click')
    expect(click).toHaveBeenCalled()
  })
})
