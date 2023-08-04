import { StyledAmount } from './Donation.style'

interface Props {
  text?: string
  value?: string
  className?: string
  isInput?: boolean
}

function Amount({ text, value, isInput }: Props) {
  return (
    <StyledAmount>
      <input type="radio" name="radio" value={value} />
      <span>
        {!isInput && <span>{text}</span>}
        {isInput && (
          <input
            type="number"
            placeholder="Інша сума, UAH"
            onKeyDown={(evt) =>
              ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
            }
          />
        )}
      </span>
    </StyledAmount>
  )
}

export default Amount
