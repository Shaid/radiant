export interface IState {
  active: boolean
}

export interface IProps {
  actions: Array<IAction>
  children?: string[] | string | undefined
}

export interface IAction {
  label: string
  callback: Function
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
