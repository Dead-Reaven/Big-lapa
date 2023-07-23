import { useState } from 'react'
import Container from '../UI/Container.style'
import { Menu, Title, Item } from './Menu.style'
import { SearchInput, StyledDogSearch } from './DogSearch.style'
import { ReactComponent as IcoSearch } from './icons/search_ico.svg'
import { ReactComponent as IcoSettings } from './icons/settings_ico.svg'

function DogSearch() {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHendler = (current: boolean) => setIsOpen(!current)

  return (
    <Container>
      <StyledDogSearch>
        <IcoSearch />
        <SearchInput type="text" placeholder="Пошук собаки за кличкою" />
        <IcoSettings
          type="button"
          onClick={() => onClickHendler(isOpen)}
          style={{ cursor: 'pointer' }}
        />
      </StyledDogSearch>
      <div>
        {isOpen ? (
          <Menu>
            <Item>
              <Title>Стать</Title>
              <div>
                <input type="checkbox" name="male" defaultChecked />
                <label htmlFor="male">Хлопець</label>
              </div>
              <div>
                <input type="checkbox" name="female" defaultChecked />
                <label htmlFor="female">Дівчина</label>
              </div>
            </Item>

            <Item>
              <Title>Розмір</Title>
              <div>
                <input type="checkbox" name="small" defaultChecked />
                <label htmlFor="small">Маленька</label>
              </div>
              <div>
                <input type="checkbox" name="medium" defaultChecked />
                <label htmlFor="medium">Середня</label>
              </div>
              <div>
                <input type="checkbox" name="big" defaultChecked />
                <label htmlFor="big">Велика</label>
              </div>
            </Item>
            <Item>
              <Title>Наявність чипу</Title>
              <div>
                <input type="checkbox" name="hasChip" defaultChecked />
                <label htmlFor="haschip">Так</label>
              </div>
              <div>
                <input type="checkbox" name="noChip" defaultChecked />
                <label htmlFor="nochip">Ні</label>
              </div>
            </Item>
            <Item>
              <Title>Наявність породи</Title>
              <div>
                <input type="checkbox" name="hasBreed" defaultChecked />
                <label htmlFor="hasBreed">Так</label>
              </div>
              <div>
                <input type="checkbox" name="hasBreed" defaultChecked />
                <label htmlFor="hasBreed">Ні</label>
              </div>
            </Item>
          </Menu>
        ) : (
          <></>
        )}
      </div>
    </Container>
  )
}

export default DogSearch
