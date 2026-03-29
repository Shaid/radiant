import React from 'react'
import { mount, shallow } from 'enzyme'
import 'intersection-observer'
import Interaction from '.'

describe('<Action />', () => {
  it('renders', () => {
    const wrapper = shallow(<Interaction actions={[]} />)
    expect(wrapper).toMatchSnapshot()
  })

  // skipped until I mock IntersectionObserver
  it.skip('triggers its action when clicked', () => {
    const click = jest.fn()

    const wrapper = mount(<Interaction actions={[]} />)
    wrapper.find('button').simulate('click')
    expect(click).toHaveBeenCalled()
  })

  it('can trigger a subaction when clicked, and then an action is clicked ', () => {
    const action = jest.fn()

    const actions = [
      { label: 'test action', callback: action }
    ]

    const wrapper = mount(<Interaction actions={actions}>Some thing!</Interaction>)
    wrapper.find('button').first().simulate('click')
    wrapper.find('[title="test action"]').simulate('click')
    expect(action).toHaveBeenCalled()
  })
})
