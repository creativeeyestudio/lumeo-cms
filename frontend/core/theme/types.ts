import type { ComponentType } from 'react'

export interface Theme {
  meta?: {
    name?: string
    version?: string
  }

  layouts?: Record<string, ComponentType<any>>
  blocks?: Record<string, ComponentType<any> | BlockVariants>
  globals?: Record<string, ComponentType<any>>
}

export type BlockVariants = {
  default: ComponentType<any>
} & Record<string, ComponentType<any>>
