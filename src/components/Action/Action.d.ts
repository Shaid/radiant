export interface IState {
}

export interface IProps {
  children?: string
  onClick: Function
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
