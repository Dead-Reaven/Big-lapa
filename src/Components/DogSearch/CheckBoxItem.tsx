import { Item, Title } from './CheckBox.styles'

interface ItemProps {
  title: string
  options: { name: string; label: string; checked?: boolean }[]
  onChange: (name: string, checked: boolean) => void
}

const CheckBoxItem = ({ title, options, onChange }: ItemProps) => {
  return (
    <Item>
      <Title>{title}</Title>
      {options.map((option) => (
        <div key={option.name}>
          <input
            type="checkbox"
            name={option.name}
            checked={option.checked}
            onChange={(e) => onChange(option.name, e.target.checked)}
          />
          <label htmlFor={option.name}>{option.label}</label>
        </div>
      ))}
    </Item>
  )
}

export default CheckBoxItem
