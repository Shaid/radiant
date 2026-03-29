export interface IState {
  currentRoom: number
  typingDone: boolean
}

export interface IProps {
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
