import React from 'react'
import { mount, shallow } from 'enzyme'

import Exits from '.'
import { IExit } from './Exits.d'

const exits: Array<IExit> = [
  {
    id: 0,
    description: ['A door'],
    destination: 1
  },
  {
    id: 1,
    description: ['A hole'],
    destination: 0
  }
]

describe('<Exits />', () => {
  it('renders', () => {
    const action = jest.fn

    const wrapper = shallow(<Exits action={action} exits={exits} />)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('triggers its action when clicked', () => {
    const action = jest.fn

    const wrapper = mount(<Exits action={action} exits={exits} />)
    wrapper.find('button').simulate('click')
    expect(action).toHaveBeenCalled()
  })
})
