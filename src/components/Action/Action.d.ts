export interface IState {
  active: boolean
}

export interface IProps {
  actions: Array<IAction>
  children?: string[] | undefined
  onClick: Function
}

export interface IAction {
  label: string
  callback: Function
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
