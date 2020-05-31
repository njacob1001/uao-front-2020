export interface Administrator {
  id: string
  names: string
  last_names: string
  email: string
  document: string
  phone: string
}

export interface AdministratorReducer {
  loading: boolean
  error: string
  administrators: Administrator[]
}
