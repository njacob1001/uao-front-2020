export interface Carrera {
  name: string
}

export interface Entrepreneur {
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
  carrera: Carrera
}

export interface EntrepreneurReducer {
  loading: boolean
  error: string
  entrepreneurs: Entrepreneur[]
}
