export interface Project {
  id: string
  name: string
  description: string
  sector: string
  status: string
  authors: Array<{
    id: number
    names: string
    last_names: string
  }>
}

export interface ProjectReducer {
  loading: boolean
  error: string
  projects: Project[]
}
