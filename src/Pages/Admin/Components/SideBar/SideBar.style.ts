import { styled } from 'styled-components'

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 25% 0 0;
  max-width: 250px;
  height: calc(100vh - 96px);
  padding: 40px 17px 0 0;
  border-right: 1px solid #cdcdcd66;
  @media screen and (max-width: 1279px) {
    position: fixed;
    display: block;
    padding: none;
    width: 40px;
  }
`
export { StyledSideBar }
