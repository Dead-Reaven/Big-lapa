import React from 'react'
import {
  Pagination,
  PaginationButton,
  PaginationNav,
} from '../Pagination/Pagination.style'
import { ReactComponent as Refresh } from '../Gallery/img/refresh.svg'

interface Props {
  cardsPerPage: number
  totalCards: number
  paginate: (pageNumber: number) => void
  nextPage: () => void | string
  message: string
}
const Paginate = ({ cardsPerPage, totalCards, paginate, nextPage, message }: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <Pagination>
      <p>{message}</p>
      <PaginationButton onClick={() => nextPage()}>
        <Refresh />
        Показати ще
      </PaginationButton>
      <PaginationNav>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </PaginationNav>
    </Pagination>
  )
}

export default Paginate
