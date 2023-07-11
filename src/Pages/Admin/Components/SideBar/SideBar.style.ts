import { styled } from 'styled-components'

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  height: calc(100vh - 96px);
  padding: 40px 17px 0 0;
  overflow-y: auto;
  border-right: 1px solid #cdcdcd66;
`
export { StyledSideBar }
