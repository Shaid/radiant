import { AppStoreType } from 'stores/AppStore'

export interface IProps {
  children?: object // TODO: set to null in defaultProps
  store: AppStoreType
}
