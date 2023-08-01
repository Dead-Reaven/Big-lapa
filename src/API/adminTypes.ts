interface AdminLogin {
  login: string
  password: string
  status?: any
}

interface AdminError {
  worning: any
}

export type { AdminError, AdminLogin }
