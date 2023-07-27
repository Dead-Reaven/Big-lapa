import { Item, Title } from './CheckBox.styles'

interface ItemProps {
  title: string
  options: { name: string; label: string; checked?: boolean }[]
  onChange: (value: { [key: string]: boolean }) => void
}

const CheckBoxItem = ({ title, options, onChange }: ItemProps) => {
  return (
    <Item>
      <Title>{title}</Title>
      {options.map(({ label, name, checked }) => (
        <div key={name}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(e) => {
              const updatedValue: { [key: string]: boolean } = {
                ...options.reduce((acc, { name: optionName, checked: optionChecked }) => {
                  acc[optionName] = optionChecked || false
                  return acc
                }, {} as { [key: string]: boolean }),
                [name]: e.target.checked,
              }
              onChange(updatedValue)
            }}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      ))}
    </Item>
  )
}

export default CheckBoxItem
