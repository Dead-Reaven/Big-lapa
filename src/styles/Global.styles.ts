import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	border: 0;
  outline: 0;
  box-sizing: border-box;
  font-size: 100%;
  font-weight: inherit;
  font-style: inherit;
  font-family: ${({ theme }) => theme.fonts.openSans};
  vertical-align: baseline;
  box-sizing: border-box;
  position: relative;
}
:focus { outline: 0;
 }
a {
	text-decoration: none;
	color: inherit;
}
ul,
ol,
li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
html,
body {
	height: 100%;
	line-height: 1.4;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
}
button,
input {
	font-weight: inherit;
	font-size: inherit;
    line-height: inherit;
	color: inherit;font-family: inherit;
}
button {
	cursor: pointer;
	background-color: inherit;
}
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
