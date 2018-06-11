export interface IState {
}

export interface IProps {
  children?: string[] | undefined
  onClick: Function
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
