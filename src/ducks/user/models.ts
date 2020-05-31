export interface UserReducer {
  readonly email: string
  readonly token: string
  readonly loading: boolean
  readonly error: any
  readonly name: string
  readonly role: string
  readonly id: number
  readonly cc: string
  readonly uaoCode: string
  readonly lastName: string
  readonly username: string
  readonly photo: string
  readonly knowledges: string[]
}
