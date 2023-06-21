import { styled } from 'styled-components'

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`
export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.subheadline};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`
