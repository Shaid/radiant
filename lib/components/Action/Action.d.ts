export interface IState {
}

export interface IProps {
  children?: string[] | string | undefined
  onClick: Function
}

export interface IAction {
  label: string
  callback: Function
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
