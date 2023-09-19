import { StyledBurgerBtn } from './Header.style'

interface Props {
  className?: string
  onClick(): any
  isActive?: boolean
}

function BurgerBtn({ className, onClick, isActive }: Props) {
  return (
    <StyledBurgerBtn className={className} onClick={onClick} $isActive={isActive}>
      <span></span>
    </StyledBurgerBtn>
  )
}

export default BurgerBtn
