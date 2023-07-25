import { useState, useEffect } from 'react'
import Container from '../UI/Container.style'
import { Menu } from './CheckBox.styles'
import { SearchInput, StyledDogSearch } from './DogSearch.style'
import { ReactComponent as IcoSearch } from './icons/search_ico.svg'
import { ReactComponent as IcoSettings } from './icons/settings_ico.svg'
import CheckBoxItem from './CheckBoxItem'
import { DogTypes } from '../../API/types'

interface DogSearchProps {
  state: DogTypes | null
  setState: (state: DogTypes) => DogTypes | void
  readonly options: DogTypes | null
}

function DogSearch({ options, state, setState }: DogSearchProps) {
  useEffect(() => {
    // update state
    if (options) setState(options)
  }, [options])

  //searching by name
  const [searchInput, setSearchInput] = useState('')

  //state for check boxes
  const [isOpen, setIsOpen] = useState(false)
  const [genders, setGenders] = useState({
    male: true,
    female: true,
  })
  const [sizes, setSizes] = useState({
    small: true,
    medium: true,
    big: true,
  })
  const [chips, setChips] = useState({
    hasChip: true,
    noChip: true,
  })
  const [breeds, setBreeds] = useState({
    hasBreed: true,
    noBreed: true,
  })

  const onClickHandler = (current: boolean) => setIsOpen(!current)
  const searchHandler = (searchingName: string) => {
    const filtered = options?.data.filter(({ name }) =>
      name.toLowerCase().includes(searchingName.toLowerCase()),
    )
    if (filtered) {
      setSearchInput(searchingName)
      setState({ data: filtered })
    }
  }

  return (
    <Container>
      <StyledDogSearch>
        <IcoSearch />
        <SearchInput
          type="text"
          placeholder="Пошук собаки за кличкою"
          value={searchInput}
          onChange={(e: any) => searchHandler(e.target.value)}
        />
        <IcoSettings
          type="button"
          onClick={() => onClickHandler(isOpen)}
          style={{ cursor: 'pointer' }}
        />
      </StyledDogSearch>
      <div>
        {isOpen && (
          <Menu>
            <CheckBoxItem
              title="Стать"
              options={[
                { name: 'male', label: 'Хлопець', checked: genders.male },
                { name: 'female', label: 'Дівчина', checked: genders.female },
              ]}
              onChange={(name, checked) =>
                setGenders((prev) => ({ ...prev, [name]: checked }))
              }
            />
            <CheckBoxItem
              title="Розмір"
              options={[
                { name: 'small', label: 'Маленька', checked: sizes.small },
                { name: 'medium', label: 'Середня', checked: sizes.medium },
                { name: 'big', label: 'Велика', checked: sizes.big },
              ]}
              onChange={(name, checked) =>
                setSizes((prev) => ({ ...prev, [name]: checked }))
              }
            />
            <CheckBoxItem
              title="Наявність чипу"
              options={[
                { name: 'hasChip', label: 'Так', checked: chips.hasChip },
                { name: 'noChip', label: 'Ні', checked: chips.noChip },
              ]}
              onChange={(name, checked) =>
                setChips((prev) => ({ ...prev, [name]: checked }))
              }
            />
            <CheckBoxItem
              title="Наявність породи"
              options={[
                { name: 'hasBreed', label: 'Так', checked: breeds.hasBreed },
                { name: 'noBreed', label: 'Ні', checked: breeds.noBreed },
              ]}
              onChange={(name, checked) =>
                setBreeds((prev) => ({ ...prev, [name]: checked }))
              }
            />
          </Menu>
        )}
      </div>
    </Container>
  )
}

export default DogSearch
