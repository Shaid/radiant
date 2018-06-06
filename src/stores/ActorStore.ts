import { types } from 'mobx-state-tree'

// MODEL
export const ActorModel = {
  name: types.string,
}

// STORE
const ActorStore = types
  .model('Actor', ActorModel)

export default ActorModel

// INIT
export const initialiseActorStore = () => ActorStore.create({
})

export type ActorStoreType = typeof ActorStore.Type
export type ActorStoreSnapshotType = typeof ActorStore.SnapshotType
