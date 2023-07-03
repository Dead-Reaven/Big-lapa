import { ReactNode } from 'react'
import { StyledHeaderRight } from './Header.style'

interface Props {
  className?: string
  children?: ReactNode
  extendNavbar?: boolean
}

function HeaderRight({ className, children, extendNavbar }: Props) {
  return (
    <StyledHeaderRight
      justify="space-between"
      align="center"
      className={className}
      extendNavbar={extendNavbar}
    >
      {children}
    </StyledHeaderRight>
  )
}

export default HeaderRight
