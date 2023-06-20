import { createGlobalStyle } from 'styled-components'
import fonts from './fonts.module.css'

const Global = createGlobalStyle`
${fonts}
*{
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  font-weight: inherit;
  font-style: inherit;
  font-family: ${({ theme }) => theme.fonts.openSans};
  vertical-align: baseline;
  box-sizing: border-box;
}
:focus { outline: 0;
 } 
 body { 
  line-height: 1;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.background};
 } ol, ul { list-style: none;
 } /* tables still need 'cellspacing="0"' in the markup */ 
 table { border-collapse: separate;
 border-spacing: 0;
 } caption, th, td { 
  text-align: left;
  font-weight: normal;
 } blockquote:before, blockquote:after, q:before, q:after { content: "";
 } blockquote, q { quotes: "" "";
 } 
`

export default Global
