export interface UserReducer {
  readonly email: string
  readonly token: string
  readonly loading: boolean
  readonly error: any
  readonly name: string
}
