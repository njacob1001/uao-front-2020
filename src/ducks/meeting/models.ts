export interface User {
  id: number
  names: string
  last_names: string
}

export interface Meeting {
  id: number
  asunto: string
  description: string
  start: string
  end: string
  facilitador: User
  emprendedor: User
  proyecto: {
    name: string
  }
}

export interface MeetingReducer {
  readonly loading: boolean
  readonly error: any
  readonly meetings: Meeting[]
}
