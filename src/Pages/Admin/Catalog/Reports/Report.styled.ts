import styled from 'styled-components'

const ReportFileStyled = styled.div`
  width: 165px;
  height: 165px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
  text-decoration: underline;

  /* cursor: pointer; */

  button {
    position: absolute;
    right: 0px;
    top: -15px;
  }
  svg {
    margin-bottom: 15px;
  }

  a:active {
    border: none;
    appearance: none;
    background: none;
  }
`

export { ReportFileStyled }
