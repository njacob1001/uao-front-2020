export interface Project {
  name: string
  description: string
  sector: string
  status: string
  entrepreneur: {
    id: number
    names: string
    last_names: string
  }
}

export interface ProjectReducer {
  loading: boolean
  error: string
  projects: Project[]
}
