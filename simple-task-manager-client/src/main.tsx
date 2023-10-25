import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { LoginPage } from './components/pages/auth/LoginPage.tsx'
import { HomePage } from './components/pages/home/HomePage.tsx'
import { Layout } from './components/layout/Layout.tsx'
import { ErrorPage } from './components/pages/error/ErrorPage.tsx'
import { RegistrationPage } from './components/pages/auth/RegistrationPage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      {/*<Route element={<RequireAuth />}>
        <Route path="profile" element={<Profile />} />
        <Route path="ad/create" element={<AdCreate />} />
      </Route>
      */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
