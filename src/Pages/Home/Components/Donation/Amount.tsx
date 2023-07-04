import { StyledAmount } from './Donation.style'

interface Props {
  text?: string
  className?: string
  isInput?: boolean
}

function Amount({ text, isInput }: Props) {
  return (
    <StyledAmount>
      <input type="radio" name="radio" />
      <span>
        {!isInput && <span>{text}</span>}
        {isInput && <input type="text" placeholder="Інша сума, UAH" />}
      </span>
    </StyledAmount>
  )
}

export default Amount
