import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../../hooks/UseAuth.ts'

export const RequireAuth = () => {
  const { isAuth } = useAuth()
  const nav = useNavigate()

  if (isAuth) return <Outlet />
  else
    useEffect(() => {
      nav('/login', {
        replace: true,
      })
    })
}
