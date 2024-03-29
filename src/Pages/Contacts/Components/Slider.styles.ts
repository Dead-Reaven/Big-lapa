import { theme } from '../../../Components/UI/Theme.styles'
import styled from 'styled-components'
import TitleH1 from '../../../Components/UI/TitleH1.style'

import { NavLink } from 'react-router-dom'

const StyledSection = styled.section`
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
  background-color: ${theme.colors.green};
  color: ${theme.colors.background};
  margin-bottom: 80px;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 100px;
    padding-bottom: 32px;
  }
  @media (min-width: 1279px) {
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 52px;
  }
  @media (min-width: 1439px) {
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 44px;
  }
`

const StyledTitleH1 = styled(TitleH1)`
  text-align: center;
  margin-top: 60%;
  margin-bottom: 161px;
  @media (min-width: 767px) {
    text-align: left;
    margin-top: 18%;
    margin-bottom: 3%;
  }
  @media (min-width: 1279px) {
    text-align: left;
    margin-top: 23%;
    margin-bottom: 3%;
  }
  @media (min-width: 1439px) {
    text-align: left;
    margin-top: 23%;
    margin-bottom: 3%;
  }
`
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  align-items: center;
  @media (min-width: 767px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 29px;
  }
  @media (min-width: 1279px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 135px;
  }
  @media (min-width: 1439px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 124px;
  }
`

const StyledLink = styled(NavLink)`
  text-align: center;
  padding: 15px 24px;
  border: 1px solid ${theme.colors.background};
  border-radius: 4px;
  width: 157px;
  &:hover {
    border: 2px solid ${theme.colors.background};
  }
  &:focus {
    border: 3px solid ${theme.colors.background};
  }
`
export { StyledSection, StyledTitleH1, StyledLink, ItemsWrapper }
