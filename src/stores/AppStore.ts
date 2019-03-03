import { types } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

// MODEL
export const AppModel = {
}

// STORE
const AppStore = types
  .model('App', AppModel)

export default AppStore

// INIT
export const initialiseAppStore = () => {
  const appStore = AppStore.create({})
  makeInspectable(appStore)

  return appStore
}

export type AppStoreType = typeof AppStore.Type
export type AppStoreSnapshotType = typeof AppStore.SnapshotType
