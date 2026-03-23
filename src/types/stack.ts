import { IconType } from 'react-icons'

export interface Technology {
  name: string
  icon?: IconType
}

export interface TechGroup {
  title: string
  items: Technology[]
}
