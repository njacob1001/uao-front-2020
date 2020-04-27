export interface User {
  id: number
  name: string
  lastName: string
  photo: string
}

export interface Meeting {
  id: number
  subject: string
  description: string
  start: string
  end: string
  state: 'scheduled' | 'canceled' | 'later' | 'done' | 'inprogress' | 'modified'
  consultor: User
  emprendedor: User
}

export interface MeetingReducer {
  readonly loading: boolean
  readonly error: any
  readonly meetings: Meeting[]
}
