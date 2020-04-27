/* eslint-disable no-param-reassign */
import axios from 'axios'
import { store } from '../App'

axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  (config: any) => {
    const state = store.getState()
    const token = state?.userReducer?.token
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    } else {
      delete config.headers.common.Authorization
    }
    return config
  },
  error => Promise.reject(error)
)
