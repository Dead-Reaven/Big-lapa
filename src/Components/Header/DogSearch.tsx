import { StyledDogSearch } from './Header.style'
import Flex from '../UI/Flex.styles'
import StyledInput from '../UI/Input.styles'
import { ReactComponent as SearchIcon } from './img/Search_icon_default.svg'

function DogSearch() {
  return (
    <StyledDogSearch>
      <Flex justify="space-between" align="center">
        <StyledInput type="text" placeholder="Пошук собаки" withSvg={true} />
        <button>
          <SearchIcon />
        </button>
      </Flex>
    </StyledDogSearch>
  )
}

export default DogSearch
