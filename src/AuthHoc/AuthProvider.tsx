import { createContext, useState } from 'react'

interface IProps {
  children: any
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState(null)

  const signin = (token: any, cb: any) => {
    setAuth(token)
    cb()
  }
  const signout = (cb: any) => {
    setAuth(null)
    cb()
  }
  const value = { auth, signin, signout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
