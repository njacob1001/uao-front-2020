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
  career: string
  studentCode: string
  type: string // posiblemente no se use
  condition: string
}

export interface EntrepreneurReducer {
  loading: boolean
  error: string
  entrepreneurs: Entrepreneur[]
}
