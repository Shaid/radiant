import { initialiseAppStore } from './AppStore'

describe('AppStore', () => {
  it('creates a new AppStore', () => {
    // Create app store
    const store = initialiseAppStore()
    expect(store).toBeDefined()
  })
})
