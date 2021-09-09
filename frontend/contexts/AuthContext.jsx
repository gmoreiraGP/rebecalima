import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'

import directus from '../lib/directus'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  const isAuthenticated = !!token

  async function signIn(data) {
    await directus.auth
      .login(data, {
        refresh: {
          auto: true,
          time: 30000,
        },
      })
      .then(response => {
        setToken(response)
        Router.push('/dashboard')
      })
      .catch(function (err) {
        console.log('AUTH CONTEXT', err)
      })
  }

  async function signOut() {
    await directus.auth.logout()
    setToken(null)
    Router.push('/')
  }

  useEffect(async () => {
    directus.users.me
      .read()
      .then(response => {
        setUser(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{ token, user, signIn, signOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}
