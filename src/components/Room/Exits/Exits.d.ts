export interface IState {
}

export interface IProps {
  action: Function
  exits: Array<IExit>
}

export interface IExit {
  id: number
  description: Array<string>
  destination: number
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
