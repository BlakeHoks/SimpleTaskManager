import axios from 'axios'
import Cookies from 'js-cookie'
import { loginData, registerData } from '../types/authTypes.ts'
import { baseUrl } from './vars.ts'

export const AuthService = {
  async getUserProfile() {
    return (
      await axios.get('http://127.0.0.1:3000/api/user/profile', {
        headers: {
          Authorization: `Bearer ${Cookies.get('access_token')}`,
        },
      })
    ).data
  },
  async login(data: loginData) {
    return (await axios.post(`${baseUrl}/auth/login`, data)).data
  },
  async register(data: registerData) {
    console.log(data)
    return (await axios.post(`${baseUrl}/auth/register`, data)).data
  },
}
