export interface IActor {
  id: number
  name: string
  age: number
  gender: string
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
  actor: IActor
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
