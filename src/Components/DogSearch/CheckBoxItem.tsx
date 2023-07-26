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
      {options.map(({ label, name, checked }) => (
        <div key={name}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(e) => onChange(name, e.target.checked)}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      ))}
    </Item>
  )
}

export default CheckBoxItem
