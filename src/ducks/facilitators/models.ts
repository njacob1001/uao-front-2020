export interface Busy {
  id: number
  start: string
  end: string
  subject: string
  description: string
}

export interface Facilitator {
  id: number
  names: string
  last_names: string
  email: string
  identification: string
  phone: string
  photo: string
  address: string
  birthday: string
  profession: string
  knowledges: string[]
  busy: Busy[]
}

export interface FacilitatorReducer {
  loading: boolean
  error: string
  facilitators: Facilitator[]
}
