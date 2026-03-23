import { IconType } from 'react-icons'

export interface Technology {
  name: string
  icon?: IconType
  color?: string
}

export interface TechGroup {
  title: string
  items: Technology[]
}
