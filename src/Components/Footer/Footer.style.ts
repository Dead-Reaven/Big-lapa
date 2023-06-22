import { styled } from 'styled-components'

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`
export const ListItem = styled.li`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
`
export const Paragraph = styled.p`
  font-size: 1 rem;
  color: ${({ theme }) => theme.colors.background};
`
