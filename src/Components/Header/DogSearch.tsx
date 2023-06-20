import React from 'react'
import StyledDogSearch from './DogSearch.style'
import Flex from '../../styles/Flex.styles'

function DogSearch() {
  return (
    <StyledDogSearch>
      <Flex justify="space-between" align="center">
        <input type="text" placeholder="Пошук собаки" />
        <button>
          <svg
            id="searchIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ACABAB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0004 21.0004L16.6504 16.6504"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Flex>
    </StyledDogSearch>
  )
}

export default DogSearch
