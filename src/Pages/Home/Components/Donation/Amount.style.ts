import { styled } from 'styled-components'
import Amount from './Amount'

const StyledAmount = styled(Amount)`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  span {
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 36px;
    transition: ${({ theme }) => theme.transitions.quick};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }

    span {
      padding: 0;
    }
  }

  input[type='radio'] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;

    &:checked + span {
      background-color: ${({ theme }) => theme.colors.lightGreen};
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`

export default StyledAmount
