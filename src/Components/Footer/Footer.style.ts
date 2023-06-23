import { styled } from 'styled-components'
import Container from '../../styles/Container.style'

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`
export const ListItem = styled.li`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 0;
  }
`
export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.background};
  padding-bottom: 40px;
`
export const AbsoluteLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`
export const FlexWrapper = styled(Container)`
  display: flex;
  padding: 60px 0 83px 0;
  justify-content: space-between;
`

export const FlexList = styled.ul`
  display: flex;
  gap: 24px;
`
export const ContactListItem = styled.li`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`
export const SocialIcons = styled.a`
  &:hover svg {
    transition: ${({ theme }) => theme.transitions.long};
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`
