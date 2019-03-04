import React from 'react'
import { shallow } from 'enzyme'

import Actor from '.'

const actor = {
  id: 1,
  name: 'Katarina',
  age: 32,
  gender: 'female',
  appearance: {
    eyes: 'green',
    hair: {
      colour: 'brown',
      length: 'shoulder-length'
    }
  },
  status: 'bored',
  idleActions: [
    'coughs',
    'rolls her eyes',
    'sighs'
  ]
}

describe('<Actor />', () => {
  it('renders', () => {
    const wrapper = shallow(<Actor actor={actor} />)
    expect(wrapper).toBeDefined()
  })

  // @TODO: tests for Actor
})
