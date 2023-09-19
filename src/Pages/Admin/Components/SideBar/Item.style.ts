import { styled } from 'styled-components'
import { ReactComponent as Mark } from './icons/GreenMark.svg'

const Text = styled.span`
  font-size: calc(10px + 0.7vw);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: left;
  overflow: visible;
  margin-left: 40px;

  @media screen and (max-width: 1279px) {
    font-size: 0;
    margin-left: 0px;
  }
`
interface Props {
  $active: boolean
}

const GreenMark = styled(Mark)<Props>`
  display: ${({ $active }) => !$active && ` none`};
  height: 100%;
  position: absolute;
  left: -16px;
`

const StyledItem = styled.button`
  display: flex;
  align-content: center;
  /* height: 30px; */
  height: fit-content;
  margin-bottom: 40px;

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    overflow: visible;
    position: absolute;
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
  @media screen and (max-width: 767px) {
  }
`

export { StyledItem, Text, GreenMark }
