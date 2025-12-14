import type { ComponentType } from 'react'

export type BlockVariants = Record<string, ComponentType<any>>

export interface Theme {
  layouts?: Record<string, ComponentType<any>>
  blocks?: Record<string, ComponentType<any> | BlockVariants>
  globals?: {
    Header?: ComponentType<any>
    Footer?: ComponentType<any>
    [slot: string]: ComponentType<any> | undefined
  }
}
