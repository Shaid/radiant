import React from "react"

export interface IState {
}

export interface IProps {
  children?: React.ReactNode
}

export interface IDefaultProps {
}

export type PropsWithDefaults = IProps & IDefaultProps
