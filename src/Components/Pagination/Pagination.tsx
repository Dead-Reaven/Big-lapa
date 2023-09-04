import React from 'react'
import {
  Pagination,
  PaginationButton,
  PaginationNav,
  ActivePageNumber,
  InactivePageNumber,
} from '../Pagination/Pagination.style'
import { ReactComponent as Refresh } from '../Gallery/img/refresh.svg'

interface Props {
  cardsPerPage: number
  totalCards: number
  paginate: (pageNumber: number) => void
  nextPage: () => void | string
  message: string
  currentPage: number
}
const Paginate = ({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
  nextPage,
  message,
}: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i)
  }
  const isLastPage = currentPage === Math.ceil(totalCards / cardsPerPage)
  return (
    <Pagination>
      {message ? (
        <p>{message}</p>
      ) : totalCards <= cardsPerPage ? null : (
        !isLastPage && (
          <PaginationButton onClick={() => nextPage()}>
            <Refresh />
            Показати ще
          </PaginationButton>
        )
      )}
      <PaginationNav>
        {totalCards <= cardsPerPage && isLastPage
          ? null
          : pageNumbers.map((number) => (
              <li key={number}>
                {number === currentPage ? (
                  <ActivePageNumber onClick={() => paginate(number)}>
                    {number}
                  </ActivePageNumber>
                ) : (
                  <InactivePageNumber onClick={() => paginate(number)}>
                    {number}
                  </InactivePageNumber>
                )}
              </li>
            ))}
      </PaginationNav>
    </Pagination>
  )
}

export default Paginate
