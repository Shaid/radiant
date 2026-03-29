export interface IActor {
  id: number
  name: string
  age: number
  gender: string
  role?: string
  appearance: IActorAppearance
  status: string
  idleActions: string[]
}

export interface IActorAppearance {
  eyes?: string
  hair?: IActorHair
  build?: string | undefined
}

export interface IActorHair {
  colour?: string
  length?: string
}

export interface IState {
}

export interface IProps {
  id: number
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
