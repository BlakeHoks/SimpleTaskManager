import Cookies from 'js-cookie'

export const useAuth = () => {
  return {
    isAuth: !!Cookies.get('access_token'),
    logIn: (token: string) => {
      Cookies.set('access_token', token)
    },
    logOut: () => {
      Cookies.set('access_token', '')
    },
  }
}
