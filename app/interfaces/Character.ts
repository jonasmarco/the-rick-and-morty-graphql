import { Episode } from './Episode'

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Record<string, any>
  location: Record<string, any>
  image: string
  episode: Episode[]
  url: string
  created: string
}
