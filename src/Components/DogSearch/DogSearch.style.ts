import { styled } from 'styled-components'
const SearchInput = styled.input`
  height: 56px;
  padding: 0 8px;
  flex: 100% 0 1;
`

const StyledDogSearch = styled.form`
  width: 100%;
  height: 80px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  box-shadow: 0px 4px 16px 0px #cdcdcd;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  svg {
    height: 48px;
    width: 48px;
    flex: 48px 0 0;
  }
  @media screen and (min-width: 1280px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
    ${SearchInput} {
      padding: 0 50px 0 20px;
    }
  }
  @media screen and (max-width: 767px) {
    height: auto;
    font-size: 16px;
    svg {
      height: 24px;
      width: 24px;
      flex: 24px 0 0;
    }
    ${SearchInput} {
      padding: 0 8px;
    }
  }
  @media screen and (max-width: 393px) {
    font-size: 4vw;
  }
`

export { StyledDogSearch, SearchInput }
