import React, { ReactNode, createContext, useContext, useState } from 'react'

interface SuccessMessageContextType {
  successMessage: string
  showSuccessMessage: (message: string) => void
}

const SuccessMessageContext = createContext<SuccessMessageContextType | undefined>(
  undefined,
)

interface SuccessMessageProviderProps {
  children: ReactNode
}

export const SuccessMessageProvider: React.FC<SuccessMessageProviderProps> = ({
  children,
}) => {
  const [successMessage, setSuccessMessage] = useState<string>('')

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message)
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }

  return (
    <SuccessMessageContext.Provider value={{ successMessage, showSuccessMessage }}>
      {children}
    </SuccessMessageContext.Provider>
  )
}

export const useSuccessMessage = (): SuccessMessageContextType => {
  const context = useContext(SuccessMessageContext)
  if (!context) {
    throw new Error('useSuccessMessage must be used within a SuccessMessageProvider')
  }
  return context
}
