import { types } from 'mobx-state-tree'

// MODEL
export const AppModel = {
}

// STORE
const AppStore = types
  .model('App', AppModel)

export default AppStore

// INIT
export const initialiseAppStore = () => AppStore.create({
})

export type AppStoreType = typeof AppStore.Type
export type AppStoreSnapshotType = typeof AppStore.SnapshotType
