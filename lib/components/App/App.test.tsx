import { shallow } from 'enzyme'
import React from 'react'
import { initialiseAppStore } from 'stores/AppStore'

import App from '.'

const store = initialiseAppStore()

describe('<App />', () => {
  it.skip('renders without crashing', () => {
    shallow(<App store={store} />)
  })
})
