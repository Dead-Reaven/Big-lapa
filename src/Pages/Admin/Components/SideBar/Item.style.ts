import { styled } from 'styled-components'

const StyledItem = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  text-align: left;
  margin-bottom: 40px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    overflow: visible;
  }
  &:hover {
    transition: 0.1s;
    transform: scale(105%);
    margin-left: 5%;
    overflow: visible;
  }
  &:last-child {
    color: red;
    margin-top: 80px;
  }
`

export { StyledItem }
