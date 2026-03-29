export interface IState {
}

export interface IProps {  
  actors: Array<number> | null
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
