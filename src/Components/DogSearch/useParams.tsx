import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface QueryParams {
  isOpen: boolean
  searchInput: string
  genders: { [key: string]: boolean }
  sizes: { [key: string]: boolean }
  chips: { [key: string]: boolean }
  breeds: { [key: string]: boolean }
}

// Define a type for the state updater functions
interface QueryParamsSetters {
  setIsOpen: (value: boolean) => void
  setSearchInput: (value: string) => void
  setGenders: (value: { [key: string]: boolean }) => void
  setSizes: (value: { [key: string]: boolean }) => void
  setChips: (value: { [key: string]: boolean }) => void
  setBreeds: (value: { [key: string]: boolean }) => void
}

function useQuery(): [QueryParams, QueryParamsSetters] {
  const { search } = useLocation()
  const navigate = useNavigate()

  // Default state
  const defaultState: QueryParams = {
    isOpen: true,
    searchInput: '',
    genders: { male: true, female: true },
    sizes: { small: true, medium: true, big: true },
    chips: { hasChip: true, noChip: true },
    breeds: { hasBreed: true, noBreed: true },
  }

  // Parse query params and set initial state
  const queryParams = new URLSearchParams(search)
  const searchInput = queryParams.get('search')
  const isOpen = queryParams.get('isOpen') === 'true'
  const genders = queryParams.getAll('gender')
  const sizes = queryParams.getAll('size')
  const chips = queryParams.getAll('chip')
  const breeds = queryParams.getAll('breed')

  const initialState: QueryParams = {
    isOpen: isOpen ?? defaultState.isOpen,
    searchInput: searchInput ?? defaultState.searchInput,
    genders: genders.length
      ? genders.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
      : defaultState.genders,
    sizes: sizes.length
      ? sizes.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
      : defaultState.sizes,
    chips: chips.length
      ? chips.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
      : defaultState.chips,
    breeds: breeds.length
      ? breeds.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
      : defaultState.breeds,
  }

  const [isOpenState, setIsOpenState] = useState(initialState.isOpen)
  const [searchInputState, setSearchInputState] = useState(initialState.searchInput)
  const [gendersState, setGendersState] = useState(initialState.genders)
  const [sizesState, setSizesState] = useState(initialState.sizes)
  const [chipsState, setChipsState] = useState(initialState.chips)
  const [breedsState, setBreedsState] = useState(initialState.breeds)

  // Update query parameters when state changes
  useEffect(() => {
    const query = new URLSearchParams()
    query.set('isOpen', isOpenState.toString())
    query.set('search', searchInputState)

    for (const gender in gendersState) {
      if (gendersState[gender]) {
        query.append('gender', gender)
      }
    }

    for (const size in sizesState) {
      if (sizesState[size]) {
        query.append('size', size)
      }
    }

    for (const chip in chipsState) {
      if (chipsState[chip]) {
        query.append('chip', chip)
      }
    }

    for (const breed in breedsState) {
      if (breedsState[breed]) {
        query.append('breed', breed)
      }
    }

    // Use navigate to update URL instead of history.replace
    navigate({ search: query.toString() })
  }, [
    isOpenState,
    searchInputState,
    gendersState,
    sizesState,
    chipsState,
    breedsState,
    navigate,
  ])

  return [
    {
      isOpen: isOpenState,
      searchInput: searchInputState,
      genders: gendersState,
      sizes: sizesState,
      chips: chipsState,
      breeds: breedsState,
    },
    {
      setIsOpen: setIsOpenState,
      setSearchInput: setSearchInputState,
      setGenders: setGendersState,
      setSizes: setSizesState,
      setChips: setChipsState,
      setBreeds: setBreedsState,
    },
  ]
}

export default useQuery
