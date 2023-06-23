interface Props {
  text?: string
  className?: string
  isInput?: boolean
}

function Amount({ text, className, isInput }: Props) {
  return (
    <label className={className}>
      <input type="radio" name="radio" />
      <span>
        {!isInput && <span>{text}</span>}
        {isInput && <input type="text" placeholder="Інша сума, UAH" />}
      </span>
    </label>
  )
}

export default Amount
