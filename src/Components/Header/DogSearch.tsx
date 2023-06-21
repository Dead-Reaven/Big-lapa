import React from 'react'
import StyledDogSearch from './DogSearch.style'
import Flex from '../../styles/Flex.styles'
import { ReactComponent as SearchIcon } from '../../assets/img/Search_icon_default.svg'

function DogSearch() {
  return (
    <StyledDogSearch>
      <Flex justify="space-between" align="center">
        <input type="text" placeholder="Пошук собаки" />
        <button>
          <SearchIcon />
        </button>
      </Flex>
    </StyledDogSearch>
  )
}

export default DogSearch
